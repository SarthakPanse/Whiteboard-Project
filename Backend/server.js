const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Allow frontend requests
app.use(express.json());

// Sample API route
app.get('/data', (req, res) => {
  res.json({
    message: "Hello from the backend!",
    author: "Sarthak",
    project: "Whiteboard App"
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
