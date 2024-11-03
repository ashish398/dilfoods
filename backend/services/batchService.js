import Batch from "../models/batch.js";

export const createBatch = async (batchData) => {
  const batch = await Batch.create(batchData);
  return batch;
};

export const getAllProductionBatches = async () => {
  const batches = await Batch.findAll({
    where: {
      status: "PRODUCTION",
    },
  });
  return batches;
};

export const getBatchByQrCode = async (qrCodeId) => {
  try {
    const batch = await Batch.findOne({ where: { qrCodeData: qrCodeId } });
    if (!batch) {
      throw new Error("Batch not found");
    }
    return batch;
  } catch (error) {
    throw error;
  }
};
