import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NEW_POST } from "../../redux/types";
import FlexBoxStyled from "../Navigation/Flexbox";
import Navigation from "../Navigation/Navigation";
import ButtonStyled from "../Posts/ButtonStyled";

export default function NewPost() {
  const data = useSelector((state) => state.newDataReducer);
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = React.useState("");
  const [newContent, setNewContent] = React.useState("");

  const sizeStyle = {
    width: "740px",
  };

  const newPostAction = {
    type: NEW_POST,
    post: {
      title: newTitle,
      content: newContent,
    },
  };
  console.log(data.posts);

  return (
    <>
      <Navigation />
      <h1>ADD YOUR NEW POST</h1>
      <FlexBoxStyled>
        <input
          className="title-input"
          type="text"
          placeholder="Post's title"
          value={newTitle}
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
        <textarea
          className="post-area"
          type="text"
          value={newContent}
          placeholder="Post's content"
          onChange={(e) => {
            setNewContent(e.target.value);
          }}
        />
        <ButtonStyled
          style={sizeStyle}
          className="add-btn"
          onClick={() => {
            dispatch(newPostAction);
            setNewTitle("");
            setNewContent("");
          }}
        >
          {" "}
          ADD NEW POST
        </ButtonStyled>
      </FlexBoxStyled>
    </>
  );
}
