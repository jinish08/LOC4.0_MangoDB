import React from "react";
import FinalChart from "../charts/FinalChart";
import Dash from "../components/Dash";
import "../styles/dashboard.css";
import { useAuth } from "../contexts/AuthContext";

const Dashboard = () => {

  const {level} = useAuth();
  console.log(level);
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
