import React from "react";
import { FriendCard } from "../../commons";
import "./friendResult.scss";

const FriendResult = ({ friendsState }) => {
  return (
    <div className="friendResult">
      {friendsState.map((friend, i) => (
        <FriendCard key={`friend-${i}`} friend={friend} />
      ))}
    </div>
  );
};

export default FriendResult;
