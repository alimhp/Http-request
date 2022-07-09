import "./FullComment.css";
import axios from "axios";
import { useState, useEffect } from "react";

const FullComment = ({ commentId, setComments, setSelectedItem }) => {
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((res) => setComment(res.data))
        .catch();
    }
  }, [commentId]);

  const DeleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:3001/comments/${commentId}`);
      const { data } = await axios.get("http://localhost:3001/comments");

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
