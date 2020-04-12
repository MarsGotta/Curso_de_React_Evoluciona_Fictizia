import React from "react";
import profile from "../../../static/images/profile.jpg";
import "./friendCard.scss";

const FriendCard = ({ friend }) => {
  const { name, age, email, phone, address, isActive } = friend;
  return (
    <div className="friendCard">
      <div className="friendCard__principal">
        <div className="friendCard__principal__col1">
          <img
            className="friendCard__principal__col1__img"
            src={profile}
            alt="profile img"
          />
          <p
            className={`friendCard__principal__col1__state ${
              isActive ? "active" : "noActive"
            }`}
          >
            • {isActive ? "active" : "offline"}
          </p>
        </div>
        <div className="friendCard__principal__col2">
          <p>{name.first}</p>
          <p>{name.last}</p>
          <p>{age}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="friendCard__info">
        <p>{address}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default FriendCard;
