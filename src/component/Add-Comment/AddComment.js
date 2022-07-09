import { useState } from "react";
import http from "../../Services/ServicesHttp";
import "./AddComment.css";
const AddComment = ({ setComments }) => {
  const [comment, setComment] = useState({ name: "", email: "", content: "" });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await http.post("/comments", {
        ...comment,
        postId: 10,
      });
      const { data } = await http.get("/comments");
      setComments(data);
    } catch (error) {}
  };

  return (
    <div className="newcomment">
      <h2>Add New Comment</h2>
      <div>
        <label>name</label>
        <input type="text" name="name" onChange={changeHandler} />
      </div>
      <div>
        <label>email</label>
        <input type="email" name="email" onChange={changeHandler} />
      </div>
      <div>
        <label>content</label>
        <input type="textarea" name="content" onChange={changeHandler} />
      </div>
      <button onClick={postCommentHandler}>submit</button>
    </div>
  );
};

export default AddComment;
