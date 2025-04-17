import { useEffect, useState } from "react";

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getRotation = (unit, max) => (unit / max) * 360;

  return (
    <div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        {/* 시계 배경 */}
        {/* <circle cx="50" cy="50" r="48" fill="#f0f0f0" stroke="none" strokeWidth="2" /> */}


        {/* 시, 분 눈금 */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 50 + Math.cos(angle) * 42;
          const y1 = 50 + Math.sin(angle) * 42;
          const x2 = 50 + Math.cos(angle) * 48;
          const y2 = 50 + Math.sin(angle) * 48;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="1" />;
        })}

        {/* 시침 */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="30"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${getRotation(time.getHours() % 12 + time.getMinutes() / 60, 12)} 50 50)`}
        />
        
        {/* 분침 */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="20"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          transform={`rotate(${getRotation(time.getMinutes(), 60)} 50 50)`}
        />

        {/* 초침 */}
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="black"
          strokeWidth="1"
          strokeLinecap="round"
          transform={`rotate(${getRotation(time.getSeconds(), 60)} 50 50)`}
        />
      </svg>
    </div>
  );
};

export default AnalogClock;
