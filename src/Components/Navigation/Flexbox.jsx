import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-self: center;
  align-content: center;
`;

function FlexBoxStyled(props) {
  return <FlexBox {...props} />;
}

export default FlexBoxStyled;
