import React from "react";

const AppFriend = ({data}) => {

    console.log(data);

  return (
    <div className="AppFriend">
        {data.picture}
        {data.name.first+''+data.name.last}
    </div>
  );
};

export default AppFriend;