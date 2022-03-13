import React from "react";
import FinalChart from "../charts/FinalChart";
import Dash from "../components/Dash";
import "../styles/dashboard.css";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {

  return (
    <>
      <Dash />
      <div className="chart">
      <FinalChart />
      </div>
    </>
  );
};

export default Dashboard;
