import "./FullComment.css";
import axios from "axios";
import { useState, useEffect } from "react";

const FullComment = ({ commentId }) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (commentId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  let commentDetail = <p> please select a comment !</p>;
  if (commentId) commentDetail = <p>Loading ...</p>;

  if (commentId) {
    commentDetail = (
      <div className="fullcomment">
        <p>{comment.name}</p>
        <p>{comment.email}</p>
        <p>{comment.body}</p>
      </div>
    );
  }
  return commentDetail;
};

export default FullComment;
