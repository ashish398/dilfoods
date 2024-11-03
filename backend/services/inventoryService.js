import Inventory from "../models/inventory.js";
import Batch from "../models/batch.js";
import HistoricalData from "../models/historicalData.js";
import sequelize from "../models/index.js";

export const updateInventory = async (updateData) => {
  const transaction = await sequelize.transaction();

  try {
    const { qrCodeData, action, quantity } = updateData;
    const batch = await Batch.findOne({ where: { qrCodeData }, transaction });

    if (!batch) {
      throw new Error("Invalid QR code");
    }

    let inventoryItem = await Inventory.findOne({
      where: { itemName: batch.productName },
      transaction,
    });

    if (!inventoryItem) {
      inventoryItem = await Inventory.create(
        {
          itemName: batch.productName,
          quantity: 0,
        },
        { transaction }
      );
    }

    if (action === "inward") {
      inventoryItem.quantity += quantity;
      batch.status = "INWARDED";
      await batch.save({ transaction });
    } else if (action === "outward") {
      inventoryItem.quantity -= quantity;
      if (inventoryItem.quantity < 0) inventoryItem.quantity = 0;
    } else {
      throw new Error("Invalid action");
    }
    await inventoryItem.save({ transaction });
    await HistoricalData.create(
      {
        date: new Date(),
        itemName: inventoryItem.itemName,
        quantitySold: action === "outward" ? quantity : 0,
      },
      { transaction }
    );
    await transaction.commit();

    return inventoryItem;
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

export const getInventory = async () => {
  const inventory = await Inventory.findAll();
  return inventory;
};
