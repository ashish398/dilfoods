import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { usePredictiveData } from "../customHooks/usePredictiveData";

//GENERATING RANDOM DATA FOR 30 DAYS
const generateDummyData = () => {
  const data = [];
  const startDate = new Date("2024-01-01");

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    data.push({
      date: date.toISOString().split("T")[0],
      predictedDemand: Math.floor(Math.random() * 100 + 50),
    });
  }

  return data;
};

const PredictiveAnalytics: React.FC = () => {
  const dummy_data = generateDummyData();
  // const {
  //   data,
  //   isLoading,
  //   error,
  // }: { data: any; isLoading: boolean; error: any } = usePredictiveData();

  // if (isLoading) return <p>Loading predictive data...</p>;
  // if (error)
  //   return <p>Error loading predictive data: {(error as Error).message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Future Inventory Needs</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={dummy_data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line
            type="monotone"
            dataKey="predictedDemand"
            name="Predicted Demand"
            stroke="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictiveAnalytics;
