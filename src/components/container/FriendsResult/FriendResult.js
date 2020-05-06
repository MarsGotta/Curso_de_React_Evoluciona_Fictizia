import React, { useEffect } from "react";
import { FriendCard } from "../../commons";
import { randomEmoji } from "../../../utils/functions/friendsFunctions";
import "./friendResult.scss";

const FriendResult = ({ friends, dataApi, setDataApi }) => {
  useEffect(() => {
    dataApi &&
      dataApi.map((data) => {
        let tags = data.tags.length;
        let emojis = [];
        Array(tags)
          .fill()
          .map(() => emojis.push(randomEmoji()));
        return (data["emojis"] = emojis);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="friendResult">
      {friends?.map((friend, i) => (
        <FriendCard
          key={`friend-${i}`}
          setDataApi={setDataApi}
          dataApi={dataApi}
          friend={friend}
        />
      ))}
    </div>
  );
};

export default FriendResult;
