import "./FullComment.css";
import axios from "axios";
import { useState, useEffect } from "react";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const DeleteHandler = () => {
    axios
      .delete(`http://localhost:3001/comments/${commentId}`)
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  };

  let commentDetail = <p> please select a comment !</p>;
  if (commentId) commentDetail = <p>Loading ...</p>;

  if (commentId) {
    commentDetail = (
      <div className="fullcomment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
        <button onClick={DeleteHandler}>Delete</button>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
