const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConnect = require('./db/db');
const TodoModel = require('./models/ToDoModel');
const auth = require('./routes/auth');
const routes = require('./routes/ToDoRoute');
const path = require("path");


require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware before defining any routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes after setting up CORS
app.use("/api/v1", auth);
app.use("/api/v2", routes);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
  

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
dbConnect();
