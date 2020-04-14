import React, { useState, useEffect } from "react";
import { SearchFriend } from "../../commons";
import { FriendResult } from "../../container";
import { friends } from "../../../utils/data/friends";
import useApi from "../../../hooks/useApi";
import { filteredFriend } from "../../../utils/functions/friendsFunctions";

const FriendsContainer = () => {

  const [friendsState, setFriends] = useState(null);

  const handleSearch = (e) => {
    let text = e.target.value;
    setFriends(filteredFriend(text, data));
  };

  const { data, error, pending, refetch } = useApi(
    "https://www.mocky.io/v2/5e8dc38f310000f7f8429be4"
  );

  useEffect(() => {
    setFriends(filteredFriend("", data));
  }, [data]);

  console.log(friendsState)

  return (
    <div>
      <SearchFriend handleSearch={handleSearch} />
      <FriendResult friendsState={friendsState} />
    </div>
  );
};

export default FriendsContainer;
