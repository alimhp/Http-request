import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/Full-comment/FullComment";
import AddComment from "../../component/Add-Comment/AddComment";
import "./Discussion.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Discussion = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setComments(response.data.slice(0, 4)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment name={c.name} email={c.email} key={c.id} />
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
      <section>
        <FullComment />
      </section>
      <section>
        <AddComment />
      </section>
    </main>
  );
};

export default Discussion;
