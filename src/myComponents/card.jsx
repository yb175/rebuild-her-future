import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ title, description, svg, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path); // bina page reload ke navigate karega
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="card-header">
        <svg
          className="card-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <use href={svg} />
        </svg>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;
