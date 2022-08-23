import React from 'react';
import styled from 'styled-components';



const Hero = ( {mainRef} ) => {

    const handleClick = () =>{
        mainRef.current.scrollIntoView({ behavior: "smooth" })
    }
    
    return(
        <HeroCont>
            <VidCont>
                <Overlay></Overlay>
                
                <video autoPlay loop muted width="850px"  >
                    <source src="../../Assets/AmpeerVidComp.mp4" type="video/mp4" />
                </video>
                
                <Herotext>
                    <p>Ampeer helps you save time and money from annoying physical inspections.</p>

                    <Button onClick={handleClick}><p>GET STARTED</p></Button>
                    
                </Herotext>
                
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
    /* width: 62.5%; */
    width: 100%;
    height: 480px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 20px; */
    /* right: 60px; */

    @media (max-width: 768px){
        video{
            width:350px;
        }
        flex-direction: column;
    }

`
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(36, 39, 44, 0.8);
    
`

const Herotext = styled.div`
    position: relative;
    width: 400px;
    height:400px;
    /* top: 52px; */
    /* left: 30px; */
    z-index: 2;
    /* border: 1px solid green; */
    align-items: flex-start;
    /* margin-bottom: 95px; */
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
            width: 80%;
        }


    p{
        /* font-family: 'Inter'; */
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color: white;
        line-height: 50px;
        text-align: center;

        @media(max-width: 768px){
            font-size: 18px;
            line-height: 30px;
        }

    }

`

const Button = styled.button`
    width: 185px;
    height: 50px;   
    /* position: absolute; */
    background: rgba(55,172,137,1);
    border-radius: 4px;
    /* right: 80px; */
    /* bottom: 80px; */
    border: none;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    margin: auto;

    &:hover{
        background: rgba(44,142,113,1);
    }

    &:active{
        background: rgba(44,142,113,1);
    }

    @media(max-width: 768px){
            
        }


    
    P{
        font-weight: 700;
        font-size: 16px;
        color: white;
        line-height: 0px;
    }
`

export default Hero;