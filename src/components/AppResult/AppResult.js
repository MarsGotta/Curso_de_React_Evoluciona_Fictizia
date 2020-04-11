import React from "react";
import AppFriend from "../AppFriend/AppFriend";


const AppResult = ({data}) => {

    let friends = data.map( (friend, key) => 
        <AppFriend data={friend} key={key} />
    )

  return (
    <div className="AppResult">
        {friends}
    </div>
  );
};

export default AppResult;
