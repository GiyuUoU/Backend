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

/* Example of a basic route

app.get('/', (req, res) => {
    res.send('Hello, Nonchalant Sigma  boi !!!');
});

*/
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


/*
3. ROUTING IN EXPRESS
---------------------------------------------------
Routing decides how your server responds to requests.
Common HTTP methods: GET, POST, PUT, DELETE
*/

app.get('/', (req, res) => {
  res.send('Home Page');  // GET request
});

app.post('/submit', (req, res) => {
  res.send('Form Submitted'); // POST request
});

app.put('/update', (req, res) => {
  res.send('Updated successfully'); // PUT request
});

app.delete('/remove', (req, res) => {
  res.send('Deleted successfully'); // DELETE request
});


/*
4. MIDDLEWARE
---------------------------------------------------
Middleware runs BETWEEN request and response.
Types:
• Application-level middleware
• Built-in middleware
• Router-level middleware
• Error-handling middleware

Usage: logging, authentication, JSON parsing, etc.
*/

// Built-in JSON middleware
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
  console.log(`Request → ${req.method} ${req.url}`);
  next(); // Moves to next middleware/route
});




