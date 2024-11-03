import React from "react";
import Button from "./Button";

interface BatchCardProps {
  batch: any;
  onInward: any;
  onCancel: any;
}

const BatchCard: React.FC<BatchCardProps> = ({ batch, onInward, onCancel }) => {
  return (
    <div className="max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-bold mb-2">Product: {batch.productName}</h3>
      <p className="text-gray-700 mb-1">
        <strong>Quantity:</strong> {batch.quantity}
      </p>
      <p className="text-gray-700 mb-3">
        <strong>Created At:</strong>{" "}
        {new Date(batch.createdAt).toLocaleString()}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>Batch ID:</strong> {batch.id}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>QR Code:</strong> {batch.qrCodeData}
      </p>

      <div className="flex space-x-4 justify-end">
        <Button onClick={onCancel} variant="danger">
          Cancel
        </Button>
        <Button onClick={onInward}>Inward</Button>
      </div>
    </div>
  );
};

export default BatchCard;
