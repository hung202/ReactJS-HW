import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Bây giờ là {time}</p>
    </div>
  );
}

export default Timer;
