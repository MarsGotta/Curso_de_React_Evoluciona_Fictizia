import React, { useState } from "react";
import { SearchFriend } from "../../commons";
import { FriendResult } from "../../container";
import { friends } from "../../../utils/data/friends";
import { filteredFriend } from "../../../utils/functions/friendsFunctions";

const FriendsContainer = () => {
  const handleSearch = (e) => {
    let text = e.target.value;
    setFriends(filteredFriend(text, friends));
  };

  const [friendsState, setFriends] = useState(filteredFriend("", friends));

  return (
    <div>
      <SearchFriend handleSearch={handleSearch} />
      <FriendResult friendsState={friendsState} />
    </div>
  );
};

export default FriendsContainer;
