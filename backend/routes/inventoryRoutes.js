import express from "express";
import * as inventoryController from "../controllers/inventoryController.js";

const router = express.Router();

router.post("/update", inventoryController.updateInventory);
router.get("/", inventoryController.getInventory);

export default router;
