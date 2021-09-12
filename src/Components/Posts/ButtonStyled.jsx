import React from "react";
import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  margin: auto;
  margin-top: 20px;
  color: purple;
  box-shadow: 0 0 0 2px purple;
  padding: 5px;
  width: 232px;
  height: 42px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  cursor: pointer;
`;

function ButtonStyled(props) {
  return <Button {...props} />;
}

export default ButtonStyled;
