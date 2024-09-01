// index.js

const express = require("express");
const path = require("path");
const leetCardController = require('./controllers/leetCardController');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Main routes
app.get("/", (req, res) => {
  res.redirect('https://leet-code-stat.vercel.app/');
});

app.get("/home", (req, res) => {
   res.redirect('https://leet-code-stat.vercel.app/');
});

app.get("/api", (req, res) => {
   res.redirect('https://leet-code-stat.vercel.app/api');
});

// API routes
app.get('/api/cardgen', leetCardController.generateCard);
app.get('/api/cardgenDetail', leetCardController.generateCardDetail);
app.get('/api/preview', leetCardController.generatePreview);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/404.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, "public/500.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
