# Contact Identifier API

## Overview
The **Contact Identifier API** is a backend service designed to manage and link contacts based on email and phone numbers. It intelligently categorizes contacts into **primary** and **secondary** based on predefined rules, ensuring efficient contact management.

## Features
- Accepts contact details (email & phone number) via API requests.
- Identifies existing contacts and links them appropriately.
- Creates **primary** contacts if no existing matches are found.
- Creates **secondary** contacts if a match is found, linking them to the primary contact.
- Ensures uniqueness in email and phone number storage.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Environment Management:** dotenv

## Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Contact-Identifier-API
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` File** 
  

4. **Start the Server**
   ```bash
   npm start
   ```



## How It Works
1. When a request is received, the system checks if the email or phone number exists.
2. If no match is found, a new **primary** contact is created.
3. If a match is found, a **secondary** contact is created and linked to the existing primary contact.
4. The API responds with structured contact information.



## Contribution
- Fork the repository.
- Create a new branch.
- Commit your changes.
- Open a pull request.

## License
This project is licensed under the MIT License.

