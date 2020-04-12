import React from "react";

const SearchFriend = ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          handleSearch(e);
        }}
      />
    </div>
  );
};

export default SearchFriend;
