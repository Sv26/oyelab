const app = require("./app"); // Import the app from app.js

const PORT = process.env.PORT || 3001;

// Start the server
app.listen(PORT, () => {
  console.log("API is live on http://localhost:3000/api/users");
});
