import React, { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Current Date and Time:</h2>
      <p>{date.toLocaleString()}</p> {/* Display current date in locale format */}
    </div>
  );
};