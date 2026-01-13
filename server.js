import router from "./routes/contactsRoutes.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

// allow app to use json data transfer
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! This my contacts API");
});

app.use("/api/contacts", router);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB`);
      // Start the server after successful connection to MongoDB
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
