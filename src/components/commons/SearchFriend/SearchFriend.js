import React from "react";
import search from "../../../static/images/search.svg";
import "./searchFriend.scss";

const SearchFriend = ({ handleSearch }) => {
  return (
    <div className="searchFriend">
      <img className="searchFriend__icon" src={search} alt="search icon" />
      <input
        className="searchFriend__search"
        type="text"
        onChange={(e) => {
          handleSearch(e);
        }}
      />
    </div>
  );
};

export default SearchFriend;
