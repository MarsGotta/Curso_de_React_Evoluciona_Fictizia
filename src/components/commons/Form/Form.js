import React from "react";

const Form = ({handleInput,save}) => {

  return(
    <div>
      Name:
      <input type="text" onChange={(e)=>handleInput(e)} name="name"></input>
      Address:
      <input type="text" onChange={(e)=>handleInput(e)} name="address"></input>
      Phone:
      <input type="text" onChange={(e)=>handleInput(e)} name="phone"></input>
      <button onClick={()=>save()}>Save</button>
    </div>
  );

};

export default Form;