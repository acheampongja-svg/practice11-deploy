const express = require('express');
const app = express();
const greeting = process.env.GREETING || "Hello from Render!"

app.use(express.json());

app.get("/", (req, res) => {
  res.send("My app is running!");
});
// GET route
app.get('/api/message', (req, res) => {
  res.json({ message: greeting });
});

// NEW POST route
app.post('/api/notes', (req, res) => {
  const { name, note } = req.body;

  if (!name || !note) {
    return res.status(400).json({
      error: "Both name and note are required."
    });
  }

  res.status(201).json({
    message: "Note received!",
    data: { name, note }
  });
});

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});