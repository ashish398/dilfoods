import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";
import { showToast } from "../utils/toast";

const fetchBatches = async () => {
  const response: any = await api.get("/batches");
  return response.data;
};

const addBatch = async (batch: any) => {
  const response = await api.post("/batches", { batchData: batch });
  return response.data;
};

export const fetchBatchByQRCodeId = async (qrCodeId: string) => {
  const response = await api.get(`/batches/qr/${qrCodeId}`);
  return response.data;
};

export const useBatch = () => {
  return useQuery({
    queryKey: ["batches"],
    queryFn: fetchBatches,
  });
};

export const useAddBatch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBatch,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["batches"],
      });
      showToast("success", "Batch created successfully!");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      showToast("error", "Failed to create batch!");
    },
  });
};
