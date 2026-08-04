import React from "react";

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
      <p className="counter-number">{showCountdown ? number : ""}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  );
}
