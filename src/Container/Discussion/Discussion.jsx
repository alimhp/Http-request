import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/Full-comment/FullComment";
import AddComment from "../../component/Add-Comment/AddComment";
import "./Discussion.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        setComments(data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedItem(id);
  };

  return (
    <main>
      <section>
        {comments ? (
          comments.map((c) => (
            <Comment
              name={c.name}
              email={c.email}
              key={c.id}
              onClick={() => selectCommentHandler(c.id)}
            />
          ))
        ) : (
          <p>loading...</p>
        )}
      </section>
      <section>
        <FullComment commentId={selectedItem}/>
      </section>
      <section>
        <AddComment />
      </section>
    </main>
  );
};

export default Discussion;
