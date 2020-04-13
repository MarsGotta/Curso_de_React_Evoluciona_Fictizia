import React, { useState, useEffect } from "react";
import AppResult from "./compontens/AppResult.js";
import AppSearch from "./compontens/AppSearch.js";
import useApi from "./hooks/useApi.js";
import "./styles.css";

function filterFriends(searchText, data) {
  console.log("filterFriends data", data);
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
  console.log("entra por App ");
  const { data } = useApi("https://www.mocky.io/v2/5e8dc38f310000f7f8429be4");

  const dataFilterFriend = filterFriends("", data);
  const [filteredFriends, setFilteredFriends] = useState(dataFilterFriend);

  const handleSearchChange = e => {
    setFilteredFriends(filterFriends(e.target.value, data));
  };

  useEffect(function persistForm() {
    // 👍 No vamos a romper la primera regla nunca más.
    if (data !== '') {
      setFilteredFriends(filterFriends("", data));
    }
  },[data]);


  return (
    <div className="App">
      <h1>Lista de Amigos!</h1>
      <AppSearch textChange={handleSearchChange} />
      <AppResult friends={filteredFriends} />
    </div>
  );
}
