import React from "react";

export default function AppCard({ data }) {
  return (
    <div className="component-app-card">
      {data.name.first} {data.name.last}
    </div>
  );
}
