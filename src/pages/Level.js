import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Level = () => {
  const { level, levelUp } = useAuth();

  const incLevel = async () => {
      console.log("fkhafja");
    try {
      await levelUp(1);
    } catch (e){
      console.log(e);
    }
  };

  return (
    <div>
    {/* <Dash /> */}
      {/* <h1>{level}</h1>
      <button onClick={incLevel}>Add Level</button> */}
    </div>
  );
};

export default Level;
