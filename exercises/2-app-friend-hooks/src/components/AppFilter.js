import React from "react";
export default function AppFilter({ textChange }) {
  const handleChange = event => {
    textChange(event);
  };

  return (
    <div className="component-search-input">
      <div>
        <input onChange={handleChange} />
      </div>
    </div>
  );
}
