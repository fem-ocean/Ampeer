import React from "react";
import styled from "styled-components";
import Child2 from "../Components/Child2";
import { Link } from "react-router-dom";

function Adminhome() {
  

  return (
    <div>
      <AddPropertyButton>
        <div style={{ margin: "auto", width: "365px" }}>
          <Link to="/adminlogin/addprop"><Input /></Link>
        </div>
      </AddPropertyButton>

      <Child2 style={{ marginTop: "100px" }} />
    </div>
  );
}

const AddPropertyButton = styled.div`
  width: 90%;
  height: 110px;
  border: 4px solid #dbf2ec;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`;
const Input = styled.input.attrs({ type: "submit", value: "Add Property" })`
  background: rgba(44, 142, 113, 0.95);
  color: white;
  border: none;
  width: 300px;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: 0.2s;
  text-align: center;
  &:hover {
    background-color: rgba(44, 142, 113, 1);
  }
`;

export default Adminhome;
