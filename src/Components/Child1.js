import React, {useState} from 'react';
import styled from 'styled-components';

function Child1(props) {

    const [state, setState] = useState(false);

    const handleClick = () =>{
        setState(state => !state);
    }

    let toggleClassCheck = state? ' active':null;

  return (
    <Selections>
        
        <ShortletRent>
            <RentButton><p>FOR RENT</p></RentButton>
            <ShortletButton onClick={handleClick}><p>FOR SHORTLET</p></ShortletButton>
        </ShortletRent>

        <HouseType>
            <All><p>All</p></All>
            <Shared><p>Shared</p></Shared>
            <OneBed><p>1 bedrooms</p></OneBed>
            <TwoBed><p>2 bedrooms</p></TwoBed>
            <ThreeBed><p>3 bedrooms</p></ThreeBed>
            <FourBed>4+ bedrooms</FourBed>
        </HouseType>


    </Selections>
  )
}

const Selections = styled.div`
    width: 1000px;
    height: 198px;
    margin: auto;
    border: 1px solid #dbf2ec;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const ShortletRent = styled.div`
    width: 70%;
    height: 60px;
    /* border: 1px solid yellow; */
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
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

`

const RentButton = styled.button`
    border: none;
    width: 300px;
    height: 50px;
    background: #2c8e71;
    border-radius: 4px;
    /* box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.25); */
    cursor: pointer;

    p{
        font-size: 16px;
        font-weight: 600;
        color: white;
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
`

const All = styled.button`
    border: none;
    width: 130px;
    height: 40px;
    background: #2c8e71;
    border-radius: 5px;
    /* box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.25); */
    cursor: pointer;

    p{
        font-size: 14px;
        font-weight: 500;
        color: white;
        /* font-family: 'Inter'; */
    }
`

const Shared = styled.button`
    border: 1px solid #2c8e71;
    width: 130px;
    height: 40px;
    border-radius: 5px;
    background: white;
    /* box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.25); */
    cursor: pointer;


    p{
        font-size: 14px;
        font-weight: 500;
        color: black;
        /* font-family: 'Inter'; */
    }
`

const OneBed = styled(Shared)`

`

const TwoBed = styled(Shared)`

`

const ThreeBed = styled(Shared)`

`

const FourBed = styled(Shared)`

`

export default Child1;