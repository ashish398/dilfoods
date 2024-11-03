import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export interface PredictiveData {
  labels: string[];
  values: number[];
}

const fetchPredictiveData = async () => {
  const response = await api.get("/predictive-data");
  return response.data;
};
export const usePredictiveData = () => {
  return useQuery({
    queryKey: ["predictiveData"],
    queryFn: fetchPredictiveData,
  });
};
