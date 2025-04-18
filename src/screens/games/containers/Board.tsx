// @ts-nocheck
import { useState } from "react";
import { Board } from "../components";

const BoardContainer = () => {
  const [currentState, setCurrentState] = useState({
    rowIndex: 0,
    boardState: ["", "", "", "", "", ""],
    currentRowEvaluation: [],
    totalEvaluation: [],
  });
  return <Board />;
};

export default BoardContainer;
