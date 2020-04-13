import React from "react";
import AppCard from "./AppCard.js";

export default function AppResult({ friends }) {
  return (
    <div className="component-app-result">
      {friends.map(friendData => (
        <AppCard data={friendData} />
      ))}
    </div>
  );
}
