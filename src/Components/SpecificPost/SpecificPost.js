import React from "react";
import { useSelector } from "react-redux";
import FlexBoxInlineStyled from "../Navigation/Flexbox";
import Navigation from "../Navigation/Navigation";
import ShowPosts from "../Posts/ShowPosts";
import SelectInputStyled from "./SelectInput";

function SpecificPost() {
  const allData = useSelector((state) => state.newDataReducer);

  const [title, setTitle] = React.useState("Show nothing");

  return (
    <div>
      <Navigation />
      <FlexBoxInlineStyled>
        <h1>CHOOSE A POST BY ITS TITLE</h1>
        <SelectInputStyled
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        >
          <option>Show nothing</option>
          {allData.posts.map((post) => {
            return <option key={post.id}>{post.title}</option> || null;
          })}
        </SelectInputStyled>
      </FlexBoxInlineStyled>
      {allData.posts
        .filter((post) => post.title === title)
        .map((post) => (
          <ShowPosts {...post} key={post.id} />
        ))}
    </div>
  );
}

export default SpecificPost;
