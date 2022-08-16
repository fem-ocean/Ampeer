import React from 'react';
import styled from 'styled-components';



function Hero(props){

    
    return(
        <HeroCont>
            <VidCont>
                <video autoPlay loop muted width="850px"  >
                    <source src="../../Assets/AmpeerVidComp.mp4" type="video/mp4" />
                </video>
                <Overlay></Overlay>
                <Herotext><p>Ampeer helps you save time and money from <br></br>annoying physical inspections.</p></Herotext>
                <Button onClick={props.handleClick}><p>GET STARTED</p></Button>
            </VidCont>
            
            
            
        </HeroCont>
        

    )
}

const HeroCont = styled.section`
    height: 500px;
    width: 100vw;
    position: relative;
    /* left: 0px; */
    top: 5px;
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const VidCont = styled.div`
    /* border: 1px solid red; */
    margin: auto;
    width: 62.5%;
    height: 480px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 20px; */
    /* right: 60px; */

`
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(36, 39, 44, 0.8);
    
`

const Herotext = styled.div`
    position: absolute;
    width: 810px;
    height:212px;
    top: 52px;
    left: 30px;
    z-index: 2;
    /* border: 1px solid green; */

    p{
        /* font-family: 'Inter'; */
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        color: white;
        line-height: 50px;

    }

`

const Button = styled.button`
    width: 185px;
    height: 50px;   
    position: absolute;
    background: rgba(55,172,137,1);
    border-radius: 4px;
    right: 80px;
    bottom: 80px;
    border: none;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;

    &:hover{
        background: rgba(44,142,113,1);
    }

    &:active{
        background: rgba(44,142,113,1);
    }

    
    P{
        font-weight: 700;
        font-size: 16px;
        color: white;
    }
`

export default Hero;