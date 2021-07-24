import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useHistory } from "react-router-dom";

interface Post {
  id: number;
  title: string;
  content: string;
}

const CREATE_POST = gql`
  mutation createPost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      title
      content
    }
  }
`;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createPost, { error, data }] = useMutation<Post>(CREATE_POST);

  const history = useHistory();
  const onSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost({ variables: { title, content } });
    history.push("/");
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
