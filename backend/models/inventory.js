import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Inventory = sequelize.define("Inventory", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Inventory;
