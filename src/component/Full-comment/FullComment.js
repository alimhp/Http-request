
import "./FullComment.css";

import { useState, useEffect } from "react";
import http from "../../Services/ServicesHttp";

const FullComment = ({ commentId, setComments, setSelectedItem }) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (commentId) {
      http
        .get(`/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const DeleteHandler = async () => {
    try {
      await http.delete(`/comments/${commentId}`);
      const { data } = await http.get("/comments");

      console.log(data);
      setComments(data);
      setSelectedItem("");
      setComment("");
    } catch (error) {}
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
