import React, { useState } from "react";
import AppResults from "./components/AppResults.js";
import AppFilter from "./components/AppFilter.js";
import filterFriends from "./utils/filterFriends.js";
import useApi from "./hooks/useApi.js";
import "./styles.css";

export default function App() {
  const { data, error, pending, refetch } = useApi(
    "https://www.mocky.io/v2/5e8dc38f310000f7f8429be4"
  );

  const filteredFriends = filterFriends("", data);
  const [filter, setFilter] = useState(filteredFriends);

  const handleSearchChange = event => {
    setFilter(filterFriends(event.target.value, data));
  };

  return (
    <div className="App">
      <AppFilter textChange={handleSearchChange} />
      <AppResults friends={filter} />
    </div>
  );
}
