import React from "react";
import { useInventory } from "../customHooks/useStock";

const StockLevels: React.FC = () => {
  const { data, isLoading, error } = useInventory();

  if (isLoading) return <p>Loading stock levels...</p>;
  if (error)
    return <p>Error loading stock levels: {(error as Error).message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Current Stock Levels
      </h2>
      <table className="min-w-full bg-white shadow-md rounded border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              Item Name
            </th>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              Quantity
            </th>
            <th className="py-2 px-4 bg-gray-200 border border-gray-300 text-center">
              Updated At
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any) => {
            const utcDate = new Date(item?.createdAt);
            const istDate = utcDate?.toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
            });

            return (
              <tr key={item.id} className="border-t border-gray-300">
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {item.itemName}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {item.quantity}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-center">
                  {istDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockLevels;
