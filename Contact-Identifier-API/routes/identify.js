const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, phoneNumber } = req.body;
  try {
    let existingContacts = await Contact.find({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingContacts.length === 0) {
      const newContact = await Contact.create({ email, phoneNumber, linkPrecedence: "primary" });
      return res.status(200).json({
        primaryContactId: newContact._id,
        emails: [email],
        phoneNumbers: [phoneNumber],
        secondaryContactIds: [],
      });
    }

    let primaryContact = existingContacts.find((c) => c.linkPrecedence === "primary") || existingContacts[0];

    if (!existingContacts.some((c) => c.email === email && c.phoneNumber === phoneNumber)) {
      const secondaryContact = await Contact.create({
        email,
        phoneNumber,
        linkedId: primaryContact._id,
        linkPrecedence: "secondary",
      });
      existingContacts.push(secondaryContact);
    }

    res.status(200).json({
      primaryContactId: primaryContact._id,
      emails: [...new Set(existingContacts.map((c) => c.email))],
      phoneNumbers: [...new Set(existingContacts.map((c) => c.phoneNumber))],
      secondaryContactIds: existingContacts.filter((c) => c.linkPrecedence === "secondary").map((c) => c._id),
    });
  } catch (error) {
    res.status(500).json({ message: "An unknown error occurred." });
  }
});

module.exports = router;