import React, {useState} from 'react';
import styled from 'styled-components';

function Child1(props) {

    const btngroupone = ['RENT', 'SHORTLET']
    const housegroup = ['Shared', '1 bedrooms', '2 bedrooms', '3 bedrooms', '4+ bedrooms']

    
    const [active, setActive] = useState(btngroupone[0]);
    const [houseType, setHouseType] = useState(housegroup[0]);



  return (
    <>
        <Selections>
            
            <ShortletRent> 
                {btngroupone.map((item)=>(
                    <RentButton
                        key ={item}
                        active={active===item}
                        onClick={()=>setActive(item)}
                        ><p>{item}</p>
                    </RentButton>
                ))}
            </ShortletRent>

            <HouseType>
                {housegroup.map((item)=>(
                    <Shared
                        key={item}
                        houseType = {houseType ===item}
                        onClick={()=>setHouseType(item)}
                        >
                        <p>{item}</p>
                    </Shared>
                ))} 
            </HouseType>

        </Selections>
    </>
  )
}

const Selections = styled.div`
    width: 95%;
    height: 198px;
    margin: auto;
    border: 1px solid #dbf2ec;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    /* flex-wrap: wrap; */

    

    @media(max-width: 768px){
            height: 400px;
    
    }

`

const ShortletRent = styled.div`
    width: 70%;
    height: 60px;
    /* border: 1px solid yellow; */
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    
    @media(max-width: 768px){
        flex-wrap: wrap;
        gap: 10px;
        height: 10px;
        justify-content: center;
        margin-top: 10px;
        margin-bottom: 140px;


    }


    
`

const HouseType = styled.div`
    width: 100%;
    height: 80px;
    /* border: 1px solid yellow; */
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;


    @media(max-width: 768px){
        flex-wrap: wrap;
        gap: 10px;
        height: 10px;
        margin-top: 10px;


    }   

`

const RentButton = styled.button`
    background-color: white;
    border: 3px solid #2c8e71;
    width: 280px;
    height: 50px;
    
    ${({active})=>active && `
        background: #2c8e71;
        p{
            color: #ffffff;
        }
    `}
    

    border-radius: 4px;
    cursor: pointer;

    p{
        font-size: 16px;
        font-weight: 600;
        color: 'black';
        /* font-family: 'Inter'; */
    }
`

const ShortletButton = styled(RentButton)`
    border: 3px solid #2c8e71;
    background: none;
    cursor: pointer;

    p{
        color: #2c8e71;
    }
    ${({clicked})=>clicked && `
        background: #2c8e71;
    `}
`

const Shared = styled.button`
    border: 1px solid #2c8e71;
    width: 130px;
    height: 40px;
    background: none;   
    border-radius: 5px;
    /* box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.25); */
    cursor: pointer;

    p{
        font-size: 14px;
        font-weight: 500;
        color: black;
        line-height: 0px;
        /* font-family: 'Inter'; */
    }

    ${({houseType})=>houseType && `
        background: #2c8e71;
        p{
            color: #ffffff;
        }
    `}
`

export default Child1;