import React from "react";
import profile from "../../../static/images/profile.jpg";
import { randomEmoji } from "../../../utils/functions/friendsFunctions";
import "./friendCard.scss";

const FriendCard = ({ friend }) => {
  const { name, age, tags, phone, address, isActive } = friend;
  let active = isActive && "active";

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
    </div>
  );
};

export default FriendCard;
