import React, { useState } from "react";
import BatchCreateModal from "./BatchCreateModal";
import Button from "../Button";

const BatchForm: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productName.trim() === "") return;
    setIsModalOpen(true);
  };
  console.log(isModalOpen);
  return (
    <form onSubmit={handleProductSubmit} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Add New Batch</h3>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <Button type="submit">Add</Button>
      </div>

      <BatchCreateModal
        productName={productName}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setProductName("");
        }}
      />
    </form>
  );
};

export default BatchForm;
