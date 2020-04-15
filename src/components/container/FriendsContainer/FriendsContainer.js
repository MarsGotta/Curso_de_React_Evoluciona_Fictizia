import React, { useState, useEffect } from "react";
import { SearchFriend, Loading } from "../../commons";
import { FriendResult } from "../../container";
import useApi from "../../../hooks/useApi";
import { urlApi } from "../../../utils/variables";
import {
  filteredFriend,
  randomEmoji,
} from "../../../utils/functions/friendsFunctions";
import "./friendsContainer.scss";

const FriendsContainer = () => {
  const [friendsState, setFriends] = useState(null);

  const handleSearch = (e) => {
    let text = e.target.value;
    setFriends(filteredFriend(text, data));
  };

  const { data, error, pending } = useApi(urlApi);

  useEffect(() => {
    setFriends(filteredFriend("", data));
  }, [data]);

  return (
    <div className="friendsContainer">
      <h1>
        Welcome to your Friend's List! {randomEmoji()}
        {randomEmoji()}
      </h1>
      <SearchFriend handleSearch={handleSearch} />
      {pending ? <Loading /> : <FriendResult friendsState={friendsState} />}
    </div>
  );
};

export default FriendsContainer;
