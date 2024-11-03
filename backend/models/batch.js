import { DataTypes } from "sequelize";
import sequelize from "./index.js";

const Batch = sequelize.define(
  "Batch",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qrCodeData: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PRODUCTION", "INWARDED"),
      allowNull: false,
      defaultValue: "PRODUCTION",
    },
  },
  {
    timestamps: true,
  }
);

export default Batch;
