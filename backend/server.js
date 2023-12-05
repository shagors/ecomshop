import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
