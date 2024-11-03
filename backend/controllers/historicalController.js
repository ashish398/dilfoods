import * as historicalService from "../services/historicalService.js";

export const getAllHistorical = async (req, res) => {
  try {
    const historicalData = await historicalService.getAllHistoricalData();
    res.status(200).json(historicalData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
