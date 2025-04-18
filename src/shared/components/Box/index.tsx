import React from "react";
import "./box.css";
import classNames from "classnames";

interface BoardBoxProps {
  value: string;
  status?: string;
  filled?: boolean;
  notEnoughLetters?: boolean;
}

const BoardBox: React.FC<BoardBoxProps> = ({
  value,
  status = false,
  filled = false,
  notEnoughLetters = false,
}) => {
  const classname = classNames("ui-boardBox", {
    "ui-boardBox--default": status === false,
    "ui-boardBox--notPresent": status === "absent",
    "ui-boardBox--present": status === "present",
    "ui-boardBox--exact": status === "exact",
    "ui-boardBox--notEnough": notEnoughLetters === true,
  });

  return (
    <div className={classname} style={{ color: filled ? "#fff" : "#000" }}>
      {value.toUpperCase()}
    </div>
  );
};

export default BoardBox;
