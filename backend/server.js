import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const PORT = process.env.PORT || 3000;

const app = express();

dotenv.config();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
