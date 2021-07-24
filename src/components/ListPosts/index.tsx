import React from "react";
import { useSubscription, gql } from "@apollo/client";
interface Post {
  id: number;
  title: string;
  content: string;
}
interface PostList {
  posts: Post[];
}

const GET_LIST_POSTS = gql`
  query {
    posts: getAllPosts {
      id
      title
      content
    }
  }
`;

const ListPosts = () => {
  const { loading, data } = useSubscription<PostList>(GET_LIST_POSTS);

  const renderPosts = () => {
    return data?.posts.map((post) => <li key={post.id}>{post.title}</li>);
  };

  return (
    <div>
      <h1>List Posts</h1>
      <ul>{renderPosts()}</ul>
    </div>
  );
};

export default ListPosts;
