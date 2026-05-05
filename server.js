const express = require('express');
const app = express();
const greeting = process.env.GREETING || "Hello from Render!"

app.use(express.json());
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.send("My app is running!");
});
// GET route
let items = [];

// GET all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/api/items', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Name is required"
    });
  }

  const newItem = {
    id: items.length + 1,
    name
  };

  items.push(newItem);

  res.status(201).json(newItem);
});

// server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});