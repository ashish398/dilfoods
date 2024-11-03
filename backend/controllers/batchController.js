import * as batchService from "../services/batchService.js";

export const createBatch = async (req, res) => {
  try {
    const { batchData } = req.body;
    const batch = await batchService.createBatch(batchData);
    res.status(201).json(batch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllBatches = async (req, res) => {
  try {
    const batches = await batchService.getAllProductionBatches();
    res.status(200).json(batches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBatchByQrCodeController = async (req, res) => {
  const { id } = req.params;

  try {
    const batch = await batchService.getBatchByQrCode(id);
    res.status(200).json(batch);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
