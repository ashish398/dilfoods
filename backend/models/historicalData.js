import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const HistoricalData = sequelize.define("HistoricalData", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantitySold: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default HistoricalData;
