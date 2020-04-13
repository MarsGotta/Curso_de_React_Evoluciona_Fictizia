import React from "react";
import "./AppResult.css";
import AppCard from "./AppCard.js";

export default function AppResult({ friends }) {
  return (
    <div className="appResult">
      {friends.map(friendData => (
        <AppCard data={friendData} />
      ))}
    </div>
  );
}
