import React, { useState } from "react";

const DynamicCheckboxes = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item) // Remove if already selected
        : [...prev, item] // Add if not selected
    );
  };

  const handleButtonClick = () => {
    console.log("Selected Items:", selectedItems);
  };

  return (
    <div>
      <h3>Select Items</h3>
      {items.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={item}
              onChange={() => handleCheckboxChange(item)}
              checked={selectedItems.includes(item)}
            />
            {item}
          </label>
        </div>
      ))}
      <button onClick={handleButtonClick}>Log Selected Items</button>
    </div>
  );
};

export default DynamicCheckboxes;
