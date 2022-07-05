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
        const { data } = await axios.get("http://localhost:3001/comments");
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    setSelectedItem(id);
  };

  
  // 4 comment => 3 comment => setComment(res.data) => clickHandler()

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
        <FullComment commentId={selectedItem} />
      </section>
      <section>
        <AddComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
