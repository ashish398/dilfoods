import React from "react";

import BatchForm from "./BatchForm";
import { useBatch } from "../../customHooks/useBatch";

const BatchList: React.FC = () => {
  const { data, isLoading, error } = useBatch();

  if (isLoading) return <p>Loading batches...</p>;
  if (error) return <p>Error loading batches: {(error as Error).message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Production Batches</h2>
      <BatchForm />
      <table className="min-w-full bg-white shadow-md rounded mt-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              Created At
            </th>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              Product Name
            </th>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              Quantity
            </th>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              QR Code Data
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((batch: any) => {
            const utcDate = new Date(batch?.createdAt);
            const istDate = utcDate?.toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            });

            return (
              <tr key={batch.id} className="border-t border-gray-300">
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {istDate}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {batch.productName}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {batch.quantity}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {batch.qrCodeData}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BatchList;
