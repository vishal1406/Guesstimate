import React from "react";
import "./button.css";
import classNames from "classnames";

interface CustomButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  handleClick?: () => void;
  status?: string;
  overlay?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  label,
  className,
  disabled = false,
  handleClick,
  status,
  overlay = false,
}) => {
  const classname = classNames(
    "ui-keyBoard-box",
    {
      "ui-keyBoard-box--notPresent": status === "absent",
      "ui-keyBoard-box--present": status === "present",
      "ui-keyBoard-box--exact": status === "exact",
      "ui-keyBoard-box--overlay": overlay,
    },
    className
  );

  return (
    <button className={classname} disabled={disabled} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
