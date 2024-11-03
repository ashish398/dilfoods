import * as inventoryService from "../services/inventoryService.js";

export const updateInventory = async (req, res) => {
  try {
    const { updateData } = req.body;
    const inventoryItem = await inventoryService.updateInventory(updateData);
    res.status(200).json(inventoryItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.getInventory();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
