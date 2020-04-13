import React from "react";
import AppCard from "./AppCard.js";

export default function AppResults({ friends }) {
  return (
    <div className="component-app-results">
      {friends.map(friendData => (
        <AppCard data={friendData} />
      ))}
    </div>
  );
}
