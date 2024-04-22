import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <span>{time}</span>
  );
}

export default Clock;
