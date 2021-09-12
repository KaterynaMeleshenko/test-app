import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_POST, EDIT_POST } from "../../redux/types";
import ShowComments from "../SpecificPost/ShowComments";
import AddComments from "../SpecificPost/AddComments";
import PostBoxStyled from "./PostBox";
import ButtonStyled from "./ButtonStyled";
import FlexBoxInlineStyled from "../Navigation/FlexboxInline";

export default function ShowPosts({ id, title, content }) {
  const data = useSelector((state) => state.newDataReducer);
  const dispatch = useDispatch();

  const [ifEditable, setIfEditable] = useState("false");
  const [changedTitle, setChangedTitle] = useState(title);
  const [changedContent, setChangedContent] = useState(content);

  const deletePostAction = {
    type: DELETE_POST,
    data: {
      postId: id,
    },
  };

  const editPostAction = {
    type: EDIT_POST,
    data: {
      postId: id,
      title: changedTitle,
      content: changedContent,
    },
  };

  return (
    <PostBoxStyled>
      <h2 id={"title-" + id} contentEditable={ifEditable}>
        {title}
      </h2>
      <div
        id={"content-" + id}
        className="post-content"
        contentEditable={ifEditable}
      >
        {content}
      </div>
      <FlexBoxInlineStyled>
        <ButtonStyled
          className="edit-btn"
          onClick={() => {
            setIfEditable("true");
          }}
        >
          {" "}
          EDIT POST
        </ButtonStyled>
        <ButtonStyled
          className="save-btn"
          onClick={() => {
            setChangedTitle(document.getElementById("title-" + id).innerHTML);
            setChangedContent(
              document.getElementById("content-" + id).innerHTML
            );
            dispatch(editPostAction);
            console.log(data.posts);
            setIfEditable("false");
          }}
        >
          {" "}
          DBL CLICK TO SAVE CHANGES
        </ButtonStyled>
        <ButtonStyled
          className="del-btn"
          onClick={() => {
            dispatch(deletePostAction);
          }}
        >
          {" "}
          DELETE POST
        </ButtonStyled>
      </FlexBoxInlineStyled>
      <h2>Comments:</h2>
      {data.comments
        .filter((comment) => comment.postId === id)
        .map((comment) => (
          <ShowComments {...comment} key={comment.id} />
        ))}
      <AddComments postId={id} />
    </PostBoxStyled>
  );
}
