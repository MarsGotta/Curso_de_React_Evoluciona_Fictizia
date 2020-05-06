import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="lds-roller">
      {Array(8)
        .fill()
        .map((n,i) => (
          <div key={i}></div>
        ))}
    </div>
  );
};

export default Loading;
