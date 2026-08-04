"use client";

import Title from "./components/Title";
import Counter from "./components/Counter";
import useCountdown from "./hooks/useCountDown";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const initialDate = `Oct 6, ${currentYear} 00:00:00`;
  const birthYear = 2008;

  const [day, hour, minute, second, age, showCountdown] = useCountdown(
    initialDate,
    birthYear,
  );

  return (
    <>
      <div className="app">
        <div className="container">
          <Title
            title={`Contagem regressiva para o B-day da Andreza ${age} anos`}
          />
          <div className="countdown-container">
            <Counter title="Dias" number={day} showCountdown={showCountdown} />
            <Counter
              title="Horas"
              number={hour}
              showCountdown={showCountdown}
            />
            <Counter
              title="Minutos"
              number={minute}
              showCountdown={showCountdown}
            />
            <Counter
              title="Segundos"
              number={second}
              showCountdown={showCountdown}
            />
          </div>
        </div>
      </div>
    </>
  );
}
