import HistoricalData from "../models/historicalData.js";

export const getAllHistoricalData = async () => {
  const historicalData = await HistoricalData.findAll();
  return historicalData;
};
