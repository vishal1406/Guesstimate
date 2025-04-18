import React from "react";
import { BoardBox } from "../../../shared";
import "../styles/board.css"

interface BoardProps {
  value: any[];
  evaluation: any[];
  isShowError?: boolean;
  filled: boolean;
}

const Board: React.FC<BoardProps> = ({
  value,
  evaluation,
  isShowError = false,
  filled,
}) => {
  return (
    <div className="ui-boardRow">
      {[...Array(5)].map((_, index) => (
        <BoardBox
          key={index}
          filled={filled}
          status={evaluation[index]}
          value={value[index] ?? ""}
          notEnoughLetters={isShowError}
        />
      ))}
    </div>
  );
};

export default Board;
