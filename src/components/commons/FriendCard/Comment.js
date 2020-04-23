import React, { useRef } from "react";

const Comment = ({ dataApi, setDataApi, id }) => {
  const comment = useRef(null);
  const handleClick = () => {
    let friendObject = dataApi?.map((data) => {
      if (data._id === id) {
        if (data.comments) {
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
  return (
    <div>
      <input type="text" ref={comment} placeholder="add comment" />
      <button onClick={() => handleClick()}>Send</button>
      <div>Comments:</div>
      {
        <p>
          {dataApi?.map((data) => {
            if (data._id === id) {
              return data.comments?.map((comment, i) => (
                <p key={`comment-${i}`}>{comment}</p>
              ));
            }
          })}
        </p>
      }
    </div>
  );
};

export default Comment;
