import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";
import { showToast } from "../utils/toast";

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}

const fetchInventory = async (): Promise<any[]> => {
  const response = await api.get("/inventory");
  return response.data as any[];
};

export const useInventory = () => {
  return useQuery<InventoryItem[]>({
    queryKey: ["inventory"],
    queryFn: fetchInventory,
  });
};

const updateInventory = async (updateData: any) => {
  try {
    const response = await api.post("/inventory/update", {
      updateData: updateData,
    });
    return response.data;
  } catch (error) {
    showToast("error", "Failed to inward batch!");
  }
};

export const useUpdateInventory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateInventory,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["inventory"],
      });
      showToast("success", "Batch inwarded successfully!");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });
};
