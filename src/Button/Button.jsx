import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button({ children, to, state }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to, { state });
    }
  };

  return (
    <button className="button-body" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
