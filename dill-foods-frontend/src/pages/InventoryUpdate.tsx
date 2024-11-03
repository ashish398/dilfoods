import React from "react";
import { useNavigate } from "react-router-dom";
import StockLevels from "../components/StockLevels";
import Button from "../components/Button";

const InventoryUpdate = () => {
  const navigate = useNavigate();
  const handleInwardClick = () => {
    navigate("/inward");
  };
  return (
    <div className="p-6">
      <Button onClick={handleInwardClick}>Inward Batches</Button>
      <StockLevels />
    </div>
  );
};

export default InventoryUpdate;
