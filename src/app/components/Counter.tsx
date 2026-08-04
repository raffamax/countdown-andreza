import React from "react";
import "../globals.css";

interface CounterProps {
  title: string;
  number: number;
  showCountdown: boolean;
}

export default function Counter({
  title,
  number,
  showCountdown,
}: CounterProps) {
  return (
    <div className="counter">
      {showCountdown ? (
        <p className="counter-number">{number}</p>
      ) : (
        <div className="spinner-container counter-number">
          <div className="spinner" role="status" aria-label="Carregando" />
        </div>
      )}
      <h3 className="counter-text">{title}</h3>
    </div>
  );
}
