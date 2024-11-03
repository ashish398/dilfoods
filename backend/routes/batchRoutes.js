import express from "express";
import * as batchController from "../controllers/batchController.js";

const router = express.Router();

router.post("/", batchController.createBatch);
router.get("/", batchController.getAllBatches);
router.get("/qr/:id", batchController.getBatchByQrCodeController);

export default router;
