import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Main = forwardRef((props,ref) => {
  
  
  const [allProperties, setAllProperties] = useState();



  return (
    <Parent ref={ref}>  
      <Child1 
        setAllProperties={setAllProperties}
        />
      <Child2
        allProperties={allProperties}
      />
    </Parent>
  );
});



const Parent = styled.section`
  width: 80%;
  /* height: 1301px; */
  /* height: max-content; */
  height: auto;
  border: 3px solid #dbf2ec;
  position: static;
  top: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 150px;
`;

export default Main;
