import React, { useState } from "react";
import { useAddBatch } from "../../customHooks/useBatch";
import QRCodeGenerator from "../QRCodeGenerator";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";

interface BatchCreateModalProps {
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

const BatchCreateModal: React.FC<BatchCreateModalProps> = ({
  productName,
  isOpen,
  onClose,
}) => {
  const { mutate: mutateBatch, status: _batchStatus } = useAddBatch();

  const [quantity, setQuantity] = useState<number>(1);
  const qrCodeId = uuidv4();

  if (!isOpen) return null;

  const handleSubmit = () => {
    mutateBatch({ productName, quantity, qrCodeData: qrCodeId });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-lg font-semibold mb-4">Enter Quantity</h2>
        <p className="mb-4">Product: {productName}</p>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          min={1}
          className="border rounded px-3 py-2 w-full mb-4"
          placeholder="Enter quantity"
        />
        <QRCodeGenerator inputValue={qrCodeId} />
        <div className="flex justify-end space-x-2">
          <Button onClick={onClose} variant="danger">
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default BatchCreateModal;
