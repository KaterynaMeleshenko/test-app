import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: raw;
  text-align: center;
  justify-content: center;
  align-content: center;
`;

function FlexBoxInlineStyled(props) {
  return <FlexBox {...props} />;
}

export default FlexBoxInlineStyled;
