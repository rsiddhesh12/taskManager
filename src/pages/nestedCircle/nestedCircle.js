import React, { useState } from "react";

const NestedCircles = () => {
  const [circleCount, setCircleCount] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setCircleCount(value);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Nested Circles</h2>
      <label>
        Enter the number of circles:{" "}
        <input
          type="text"
        //   min="1"
          value={circleCount}
          onChange={handleInputChange}
        />
      </label>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          position: "relative",
          width: `${50 * circleCount}px`,
          height: `${50 * circleCount}px`,
        }}
      >
        {Array.from({ length: circleCount }).map((_, index) => {
          const size = 50 * (circleCount - index);
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                width: `${size}px`,
                height: `${size}px`,
                border: "2px solid black",
                borderRadius: "50%",
                boxSizing: "border-box",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default NestedCircles;
