import React from "react";
import { FriendCard } from "../../commons";
import "./friendResult.scss";

const FriendResult = ({ friends, dataApi, setDataApi }) => {
  return (
    <div className="friendResult">
      {friends?.map((friend, i) => (
        <FriendCard key={`friend-${i}`}  setDataApi={setDataApi} dataApi={dataApi} friend={friend} />
      ))}
    </div>
  );
};

export default FriendResult;
