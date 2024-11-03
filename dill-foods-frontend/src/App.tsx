import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import PredictiveAnalytics from "./pages/PredictiveAnalytics";
import InventoryUpdate from "./pages/InventoryUpdate";
import InwardScreen from "./pages/InwardScreen";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inward" element={<InwardScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<InventoryUpdate />} />
            <Route path="/predictive" element={<PredictiveAnalytics />} />
          </Routes>
        </main>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      </div>
    </Router>
  );
};

export default App;
