import React from "react";

// Material UI Dependencies:
import TextField from '@material-ui/core/TextField';

const AppSearch = ({handleSearch}) => {

    const handleIputSearch = (event) => {
        handleSearch(event);
    }

  return (
    <TextField id="standard-basic" label="Buscador" onChange={event => handleIputSearch(event)}/>
  );
};

export default AppSearch;