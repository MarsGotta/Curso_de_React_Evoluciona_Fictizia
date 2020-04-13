import React, { useState } from "react";
import AppResult from "./compontens/AppResult.js";
import AppSearch from "./compontens/AppSearch.js";
import useApi from "./hooks/useApi.js";
import "./styles.css";

function filterFriends(searchText, data) {
  return data.filter(friend => {
    if (friend.name.first.toLowerCase().includes(searchText)) {
      return true;
    }
    if (friend.name.last.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  });
}

export default function App() {
  const { data } = useApi("https://www.mocky.io/v2/5e8dc38f310000f7f8429be4");
  const filterFriend = filterFriends("", data);
  const [filteredFriends, setFilteredFriends] = useState(filterFriend);

  const handleSearchChange = e => {
    setFilteredFriends(filterFriends(e.target.value, data));
  };

  return (
    <div className="App">
      <h1>Lista de Amigos!</h1>
      <AppSearch textChange={handleSearchChange} />
      <AppResult friends={filteredFriends} />
    </div>
  );
}
