import express from "express";
import * as historicalController from "../controllers/historicalController.js";

const router = express.Router();

router.get("/", historicalController.getAllHistorical);

export default router;
