import React from "react";
import AppFriend from "../AppFriend/AppFriend";
import AppResultWrapper from "./AppResult.css";

const AppResult = ({ data }) => {
  let friends = data.map((friend, key) => (
    <AppFriend data={friend} key={key} />
  ));

  return <div className="AppResultWrapper">{friends}</div>;
};

export default AppResult;
