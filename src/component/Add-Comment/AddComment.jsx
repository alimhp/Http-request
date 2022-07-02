import "./AddComment.css";
const AddComment = () => {
  return (
    <div className="newcomment">
      <div>
        <label>name</label>
        <input type="text" />
      </div>
      <div>
        <label>email</label>
        <input type="email" />
      </div>
      <div>
        <label>body</label>
        <input type="textarea" />
      </div>
    </div>
  );
};

export default AddComment;
