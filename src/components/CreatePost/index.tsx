import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, content);
  };
  return (
    <div>
      <h1>create post</h1>
      <form action="" onSubmit={(e) => onSumit(e)}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <textarea name="content" onChange={(e) => setContent(e.target.value)} />
        <br />
        <br />
        <input type="submit" value="create" />
      </form>
    </div>
  );
};

export default CreatePost;
