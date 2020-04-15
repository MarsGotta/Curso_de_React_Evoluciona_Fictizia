import React, { useRef, useEffect } from "react";
import profile from "../../../static/images/profile.jpg";
import { randomEmoji } from "../../../utils/functions/friendsFunctions";
import "./friendCard.scss";

const FriendCard = ({ friend, dataApi, setDataApi }) => {
  // let pru = dataApi.filter(data=>data._id===friend._id);
  // console.log(pru[0]["likes"]="sandra")
  // console.log(pru)
  const { name, age, tags, phone, address, isActive } = friend;
  const comment = useRef(null);
  let active = isActive && "active";

  const handleClick = () => {
    let friendObject = dataApi?.map((data) => {
      if (data._id === friend._id) {
        if (data.comments) {
          console.log(data.comments);
          data.comments.push(comment.current.value);
          return data;
        } else {
          return { ...data, comments: [comment.current.value] };
        }
      } else {
        return data;
      }
    });
    setDataApi(friendObject);
    comment.current.value = "";
  };

  //console.log(dataApi)
  return (
    <div className="friendCard">
      <div className="principal">
        <div className="principal__col1">
          <img
            className="principal__col1__img"
            src={profile}
            alt="profile img"
          />
          <p className={`principal__col1__state ${active}`}>
            • {isActive ? "active" : "offline"}
          </p>
        </div>
        <div className="principal__col2">
          <p className="principal__col2__profile">
            <span className="firstName">{name.first} </span>
            <span className="lastName">{name.last}, </span>
            <span className="age">{age}</span>
          </p>
          <div className="principal__col2__tags">
            {tags.map((tag, i) => (
              <p className="tag" key={`tag-${i}`}>
                {randomEmoji()}#{tag}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="info">
        <p>{address}</p>
        <p>{phone}</p>
      </div>
      <input type="text" ref={comment} placeholder="add comment" />
      <button onClick={() => handleClick()}>Send</button>
      <div>Comments:</div>
      {
        <p>
          {console.log(dataApi[0].comments, dataApi[1].comments)}
          {dataApi?.map((data) => {
            if (data._id === friend._id) {
              return data.comments?.map((comment) => <p>{comment}</p>);
            }
          })}
        </p>
      }
    </div>
  );
};

export default FriendCard;
