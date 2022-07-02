import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/Full-comment/FullComment";
import AddComment from "../../component/Add-Comment/AddComment";
import "./Discussion.css";
const Discussion = () => {
  return (
    <main>
      <section>
        <Comment />
        <Comment />
        <Comment />
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
