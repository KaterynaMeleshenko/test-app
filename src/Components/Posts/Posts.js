import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import ShowPosts from "./ShowPosts";

function Posts() {
  const allPosts = useSelector((state) => state.newDataReducer);

  return (
    <>
      <Navigation />
      <h1>ALL POSTS</h1>
      {allPosts.posts.map((post) => (
        <ShowPosts {...post} key={post.id} />
      ))}
    </>
  );
}

export default Posts;
