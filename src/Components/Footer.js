import React from 'react';
import styled from 'styled-components';

function Footer(props) {
  return (
    <Container>
        <Upper>
           
            <One>
                <p>Customer Support</p>
                <div>
                    <span><img src="../../Assets/mail-Icon.svg" alt="mailIcon" /></span>
                    <span>heebenproperties@gmail.com</span>
                </div>
                <div>
                    <span><img src="../../Assets/Phoneiconn.svg" alt=""/></span>
                    <span>+2347069085152</span>
                </div>
                <div>
                    <span><img src="../../Assets/whatsapp.svg" alt=""/></span>
                    <span>+2347069085152</span>
                </div> 
            </One>

            <Two>
                <p>For Enquiries or Suggestions</p>
                    <div>
                        <span><img src="../../Assets/mail-Icon.svg" alt="mailIcon" /></span>
                        <span>heebenproperties@gmail.com</span>
                    </div>
                    <div>
                        <span><img src="../../Assets/Phoneiconn.svg" alt=""/></span>
                        <span>+2347069085152</span>
                    </div>
                    <div>
                        <span><img src="../../Assets/whatsapp.svg" alt=""/></span>
                        <span>+2347069085152</span>
                    </div> 
            </Two>

            <Three>
                <p>Contact Address</p>
                    <div>
                        <span><img src="../../Assets/locationwhite.svg" alt="locationIcon" /></span>
                        <span>Adewale Kolawole street, <br /> Lekki phase 1, <br /> Lagos.</span>
                    </div>
            </Three>

        </Upper>

        <Lower>
            <p>Powered by Heeben Properties</p>
            <span><span>&copy;</span>2022 All rights reserved</span>
        </Lower>
    </Container>
  )
}

const Container = styled.footer`
    width: 100vw;
    height: 221px;
    background-color: #24272c;
    position: static;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    /* margin-bottom: 25px; */
    @media(max-width: 768px){
        height: 600px;
    }

    

`
const Upper = styled.div`
    /* border: 1px solid white; */
    width: 70%;
    height: 130px;
    margin: auto;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    justify-content: space-around;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
        gap: 10px;
    }

   
`
const Lower = styled.div`
    /* border: 1px solid red; */
    width: 50%;
    height: 40px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & >p{
        color: white;
        font-size: 12px;
        font-weight: 700;
        margin: 1px;
    }

    &>span{
        font-size: 12px;
        font-weight: 400;
        color: #676767
    }

    @media(max-width: 768px){
        margin-top: 10px;
    }
`

const One = styled.div`
    width: 25%;
    height: 120px;
    /* border: 1px solid red; */
    
    & > p{
        color: white;   
    }

    & > div > span{
        color: white;
        font-size: 12px;
        font-weight: 300
    }
    @media(max-width: 768px){
        height: 170px;
        width: 70%;
    }

    

`

const Two = styled(One)``

const Three = styled(One)``

export default Footer