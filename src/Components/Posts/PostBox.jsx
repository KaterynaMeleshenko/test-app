import React from "react";
import styled from "styled-components";

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-content: center;
  border: 3px dashed purple;
  width: 740px;
  margin: auto;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px;
`;

function PostBoxStyled(props) {
  return <PostBox {...props} />;
}

export default PostBoxStyled;
