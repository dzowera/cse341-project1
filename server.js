import express from "express";
import dotenv from "dotenv";
import contactsRouter from "./routes/contactsRoutes.js";
import businessesRouter from "./routes/businessesRoutes.js";
import authRouter from "./routes/auth.routes.js";
import connectDB from "./config/db.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


// JSON middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! This my contacts API");
});

// Routes
app.use("/api/contacts", contactsRouter);
app.use("/api/businesses", businessesRouter);

// Auth routes

app.use("/api/auth", authRouter);

// Swagger API documentation route

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Connect DB, then start server
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;