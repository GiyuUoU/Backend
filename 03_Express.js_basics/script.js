/*
---------------------------------------------------
EXPRESS.JS NOTES
---------------------------------------------------
*/

/*
1. INTRODUCTION TO EXPRESS.JS
---------------------------------------------------
Express.js is a lightweight, fast, and flexible backend framework for Node.js.
It helps you build APIs and web applications easily.
• Simplifies routing
• Supports middleware
• Handles HTTP requests & responses
• Great for REST APIs
*/

/*
2. SETTING UP A BASIC EXPRESS APP
---------------------------------------------------
Steps:
1. Install Express →  npm install express
2. Create app.js
3. Setup server
*/

const express = require('express');   // Import express
const app = express();                // Create app instance

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Nonchalant Sigma  boi !!!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});