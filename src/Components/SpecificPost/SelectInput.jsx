import React from "react";
import styled from "styled-components";

const SelectInput = styled.select`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 10px 0px;
  width: 780px;
  padding-left: 20px;
  border-radius: 10px;
  border: 1px solid purple;
`;

function SelectInputStyled(props) {
  return <SelectInput {...props} />;
}

export default SelectInputStyled;
