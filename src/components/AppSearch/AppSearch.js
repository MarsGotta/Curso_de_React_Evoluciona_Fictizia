import React from "react";


const AppSearch = ({handleSearch}) => {

    const handleIputSearch = (event) => {
        // event.persist();
        handleSearch(event);
    }

  return (
    <input type="text" onChange={event => handleIputSearch(event)}/>
  );
};

export default AppSearch;