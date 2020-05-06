import React, { useState, useEffect } from "react";
import { SearchFriend, Loading, Error, Form } from "../../commons";
import { FriendResult } from "../../container";
import useApi from "../../../hooks/useApi";
import useForm from "../../../hooks/useForm";
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
  const [form, setForm] = useState({}); //Next step variable in redux or contextApi

  const handleSearch = (e) => {
    let text = e.target.value;
    setFriends(filteredFriend(text, dataApi));
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let text = e.target.value;
    console.log(name,text);
    setForm({...form,[name]:text})
    console.log("form:",form);
  };

  const save = () => {
    // const { data, error, pending } = useForm(form,dataApi);
  }

  const { data, error, pending } = useApi(urlApi);

  useEffect(() => {
    setDataApi(data);
  }, [data]);
  useEffect(() => {
    dataApi && setFriends(filteredFriend("", dataApi));
  }, [dataApi]);


  return (
    <div className="friendsContainer">
      <Form handleInput={handleInput} save={save}/>
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
      {error && <Error />}
    </div>
  );
};

export default FriendsContainer;
