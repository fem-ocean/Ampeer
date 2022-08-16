import React, { useState } from 'react';
import styled from 'styled-components';
import Propertycard from './Propertycard';



function Lekkiphase1(props) {

    const[isActive, setIsActive] = useState(false)

  return (
    <Lekkiph1Dropdown>
        
        <DropdownBtn onClick={(e) =>setIsActive(!isActive)}>
            <div></div>
            <div><p>{props.location}</p></div>
            <div>
                <i>5 Properties</i>
                {/* <img src="../../../Assets/Polygon 2.svg" alt="dropArrow"/> */}
            </div>
        </DropdownBtn>
        
        {isActive && (

            <DropdownContent>
            
                <DropdownItem>
                    <Propertycard />
                </DropdownItem>
                
                <DropdownItem>
                    <Propertycard />
                </DropdownItem>
                
                <DropdownItem>
                    <Propertycard />
                </DropdownItem>

                <DropdownItem>
                    <Propertycard />
                </DropdownItem>

            </DropdownContent>
        )}
        

    </Lekkiph1Dropdown>
  )
}

const Lekkiph1Dropdown = styled.div`
    width: 100%;
    height:max-content;
    /* position: absolute; */
    margin-top: 20px;
    /* border: 1px solid blue; */


`

const DropdownBtn = styled.div`
    width: 100%;
    height: 48px;
    background-color: #dbf2ec;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);

    &> div{
        width: 300px;
        height: 30px;
        /* border: 1px solid green; */
        display: flex;
    }
    & > div >p{
        font-weight: 600;
        font-size: 16px;
        margin: auto;
    }
    &> div> i{
        margin: auto;
        font-size: 14px;
        font-weight: 300;

    }
    
`

const DropdownContent = styled.div`
    height: auto;
`

const DropdownItem = styled.div``



export default Lekkiphase1;