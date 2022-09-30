import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Footer from './Footer';
import { useParams } from "react-router-dom";
import axios from 'axios';


function PropertyInfo() {
    const {id} = useParams();
    console.log(id)


    const [detail, setDetail] = useState();
    console.log(detail)
    const [error, setError] = useState();

    
    
    let url = `http://ampeer-001-site1.gtempurl.com/api/Admin/GetPropertyById/${id}`
    useEffect(()=>{
        axios({
            method: 'get',
            url: url,
        })
        .then((res)=> {
            setDetail(res.data)
            console.log(res.data)
                     
        })
        .catch((err)=>{
            console.log(err)
            setError(`Something went wrong: ${err.message}`)
        })
    }, [url])
    
    
  return (
    <div>
        <Helmet>
          <title>Videos || Ampeer is Life</title>
      </Helmet>

      {/* if there is an error eg network error */}
      {error? <p>{error}</p>: null}
       
        <Headline>
           
            <PropertyVideos>
                <Thumbnail>
                    <img src="../../../Assets/Union.svg" width="120px" alt="unionImage"/>
                </Thumbnail>

                <SelectThumbnail>
                    <StreetVideo>
                        <ExtVid><Cover></Cover></ExtVid>
                        <p>Street</p>
                    </StreetVideo>
                    <CompoundVideo>
                        <CompVid><Cover></Cover></CompVid>
                        <p>Compound</p>
                    </CompoundVideo>
                    <InteriorVideo>
                        <IntVid></IntVid>
                        <p>Interior</p>
                    </InteriorVideo>

                </SelectThumbnail>
            </PropertyVideos>
            
            <DescGroup>
                <Description>
                    { detail?
                        <>
                            <div>
                                {/* <span><img src="../../../Assets/HouseIcon.svg" alt="houseIcon" /></span> */}
                                <span> {detail.data.roomType} Flat for {detail.data.category}</span>
                                

                            </div>
                            <div>
                                {/* <span><img src="../../../Assets/location.svg" alt="locationIcon"/></span> */}
                                <span>{detail.data.location}, Lagos.</span>
                                

                            </div>
                            <div>
                                {/* <span><img src="../../../Assets/NairaIcon.svg" alt="NairaIcon"/></span> */}
                                <span><img src="../../../Assets/NairaBasket.svg" alt=""/></span>
                                {detail.data.category === 'Shortlet'? <span>{detail.data.amount} per night</span> :
                                <span>{detail.data.amount} per annum</span>}

                                
                                {/* <span>per annum</span> */}
                            </div>    
                        </>
                     : (
                        <p>Something went wrong</p>
                    )}  
                </Description>

                <PayPrompt>

                    <p><strong>Cool with the interior?</strong></p>
                    
                    <p>To be sure of physically inspecting and taking this property, you can view all parts of the house including the street and compound for <strong>200 Naira only.</strong></p>
                </PayPrompt>

                <PayButton>
                    <p>PAY 200</p>
                </PayButton>
            </DescGroup>

        </Headline> 

        <div style={{marginBottom: '100px',
             margin: 'auto',
            //  border: '1px solid red',
             width: '70%',
         }}>
            <img  src="./../../Assets/Group 2858.jpg" alt="" width="100%"/>
        </div>

        <Footer />


        
        
        
               
        
    </div>
  )
}

const Headline = styled.div`
    width: 90%;
    height: 545px;
    /* border: 1px solid red; */
    position: static;
    display: flex;
    flex-direction: row;
    margin: auto;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-top: 20px;

    @media(max-width: 768px){
        flex-direction: column;
        height: 1100px;
        justify-content: start
    }

`
const DescGroup = styled.div`
    width: 28%;
    height: 500px;
    border: 3px solid #dbf2ec;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 768px){
        width: 100%;
    }
`

const Description = styled.div`
    width: 90%;
    height: 100px;
    /* border: 1px solid blue; */
    /* background-color: #dbf2ec; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-top: 20px;
    /* margin-left: 40px; */
    

    & > div>span{
        margin-left: 5px;
        font-weight: 600;
        font-size: 18px;
        margin-left: 0px;
    }
`

const PayPrompt = styled.div`
    width: 95%;
    height: 180px;
    /* border: 1px solid red; */
    background-color: rgba(217,242,236,0.5);


    & > p{
        font-size: 14px;
        line-height: 25px;
        text-align: justify;
    }
`

const PayButton = styled.button`
    border: none;
    width: 300px;
    height: 50px;
    background: #2c8e71;
    border-radius: 4px;
    cursor: pointer;

    & > p{
        color: white;
        font-weight: 700;
        font-size: 16px;
    }
`

const PropertyVideos = styled.div`
    width: 60%;
    /* height: 1301px; */
    /* height: max-content; */
    height: 520px;
    border: 3px solid #dbf2ec;
    /* position: static; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        width: 95%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

const Thumbnail = styled.div`
    width: 97%;
    height: 400px;
    /* border: 1px solid blue; */
    background-color: #24272c;
    background-image: url("../../../Assets/IMG_5243.JPG");
    background-repeat:  no-repeat;
    background-size: cover;
    cursor: pointer;
    /* margin: auto; */
    position: relative;
    
    
    @media(max-width: 768px){
        img{
            width:80px;
            position: absolute;
            top: 5%;
            left: -40%;

            
        }
    }
    

    &>img{
        margin-left: 250px;
        margin-top: 150px;

        
    }
    
`

const SelectThumbnail = styled.div`
    width: 85%;
    height: 100px;
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 768px){
        justify-content: space-between;
    }

    

`

const StreetVideo = styled.div`
    width: 100px;
    height: 80px;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    cursor: pointer;

    & > p{
        font-size: 12px;
        line-height: 0px;
        margin: auto;
        font-weight: 600;
        color: rgba(0,0,0,0.5);
    }

    @media(max-width: 768px){
        width: 80px;
        
    }
`

const CompoundVideo = styled(StreetVideo)`
   
`

const InteriorVideo = styled(StreetVideo)`
    & > p{
        color: rgb(0,0,0)
    }
`

const Cover = styled.div`
    width: 100%;
    height: 100%;
    background-color: #24272c;
    background-color: rgba(36, 39,44, 0.8);
`

const ExtVid = styled.div`
    width: 100%;
    height: 60px;
    /* border: 1px solid purple; */
    background-color: #24272c;
    background-image: url("../../../Assets/IMG_5243.JPG");
    background-size: cover;
    position: relative;

    /* & > div{
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #24272c;

    } */
`

const CompVid = styled(ExtVid)`
    background-image: url("../../../Assets/IMG_5250.JPG");
`

const IntVid = styled(ExtVid)`
    background-image: url("../../../Assets/IMG_5243.JPG");
`





export default PropertyInfo;