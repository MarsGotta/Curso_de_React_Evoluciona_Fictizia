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
  const [dataApi, setDataApi] = useState(null); //Next step variable in redux or contextApi
  const [friends, setFriends] = useState(null);
  const [emoji] = useState(randomEmoji());

  const handleSearch = (e) => {
    let text = e.target.value;
    setFriends(filteredFriend(text, dataApi));
  };

  const { data, error, pending } = useApi(urlApi);

  useEffect(() => {
    setDataApi(data);
  }, [data]);
  useEffect(() => {
    dataApi && setFriends(filteredFriend("", dataApi));
  }, [dataApi]);

  return (
    <div className="friendsContainer">
      <h1>Welcome to your Friend's List! {emoji}</h1>
      <SearchFriend handleSearch={handleSearch} />
      {pending ? (
        <Loading />
      ) : (
        <FriendResult
          dataApi={dataApi}
          setDataApi={setDataApi}
          friends={friends}
        />
      )}
      {error && <p>We have an internal problem 😓 try it later!</p>}
    </div>
  );
};

export default FriendsContainer;
