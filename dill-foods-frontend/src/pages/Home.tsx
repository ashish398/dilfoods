import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to Dil Foods Assignment
        </h1>
        <p className="text-gray-700 mt-2">
          A webapp to manage your batches and inventory efficiently.
        </p>
      </header>

      <section className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Page Structure
        </h3>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Dashboard Page
          </h3>
          <p className="text-gray-600 mt-2">
            The Dashboard page lists all current "in production" batches. Here’s
            what you can do:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>
              Search for a product using the integrated product search feature.
            </li>
            <li>
              Add new production batches, which will generate a unique QR code
              for tracking.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700">
            Inventory Page
          </h3>
          <p className="text-gray-600 mt-2">
            The Inventory page displays the current inventory count. Key
            functionalities include:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Update inventory counts by "inwarding" a batch.</li>
            <li>
              Inward batches by scanning a QR code or entering the QR code
              identifier manually.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">
            Predictive Analytics Page
          </h3>
          <p className="text-gray-600 mt-2">
            This page contains the predictions of future inventory based on last
            30 days data. Right now it shows a dummy chart, but can be connected
            to sales data for better predictions
          </p>
          <p className="text-gray-600 mt-2">
            Code for the inventory prediction model is in the /ml-pipeline
            folder
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
