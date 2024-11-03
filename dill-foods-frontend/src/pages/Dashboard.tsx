import React from "react";
import BatchList from "../components/Batches/BatchList";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <BatchList />
    </div>
  );
};

export default Dashboard;
