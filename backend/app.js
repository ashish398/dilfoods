import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import batchRoutes from "./routes/batchRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/batches", batchRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/historical-data", inventoryRoutes);

export default app;
