import React from "react";

export default function AppCard({ data }) {
  return (
    <div>
      {data.name.first} {data.name.last}
    </div>
  );
}
