const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const identifyRoute = require("./routes/identify");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/identify", identifyRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));