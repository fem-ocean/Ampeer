import React from 'react';
import styled from 'styled-components';
import Child1 from './Child1';
import Child2 from './Child2';

function Main(props) {


  // const Parent = React.forwardRef((props, ref)=>(
  //   <Parent ref={ref}>
  //     {props.children}
  //   </Parent>
  // ) )

  return (
    <Parent>
        <Child1 />
        <Child2 />
    </Parent>
  )
}

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
    margin-top: 100px;
    
    
`

export default Main;