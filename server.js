import express from "express";
import dotenv from "dotenv";
import router from "./routes/contactsRoutes.js";
import connectDB from "./config/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// JSON middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! This my contacts API");
});

// Routes
app.use("/api/contacts", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Connect DB, then start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;