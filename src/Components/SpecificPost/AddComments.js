import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NEW_COMMENT } from "../../redux/types";
import FlexBoxInlineStyled from "../Navigation/FlexboxInline";
import ButtonStyled from "../Posts/ButtonStyled";

export default function AddComments({ id, postId, content }) {
  const data = useSelector((state) => state.newDataReducer);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = React.useState("");

  const newCommentAction = {
    type: NEW_COMMENT,
    comment: {
      postId: postId,
      content: newComment,
    },
  };

  return (
    <FlexBoxInlineStyled>
      <textarea
        className="comment-area"
        type="text"
        value={newComment}
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
      <ButtonStyled
        className="add-btn"
        onClick={() => {
          dispatch(newCommentAction);
          setNewComment("");
        }}
      >
        {" "}
        ADD NEW COMMENT
      </ButtonStyled>
    </FlexBoxInlineStyled>
  );
}
