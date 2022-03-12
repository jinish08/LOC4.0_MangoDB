import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Level = () => {
  const { level, levelUp } = useAuth();

  const incLevel = async () => {
      console.log("fkhafja");
    try {
      await levelUp();
    } catch (e){
      console.log(e);
    }
  };

  return (
    <div>
      <h1>{level}</h1>
      <button onClick={incLevel}>Add Level</button>
    </div>
  );
};

export default Level;
