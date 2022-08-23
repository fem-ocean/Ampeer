import React from 'react';
import styled from 'styled-components';
import AllProperties from './AllProperties';
import Property  from './AllProperties'

function Propertycard(props) {

//   console.log(AllProperties)
 
  // let ForRent = AllProperties.Property.filter(RentOnly);

  // function RentOnly(x){
  //   return x === 'forrent'};
//   console.log(props.house.AllProperties)



  


  return (
    <Container>
        <Card>
            <CardCont>
               
                    
                <Thumbnail><img src="../../../Assets/Union.svg" alt="unionImage"/></Thumbnail>
                <Description>
                    <div>
                        <span><img src="../../../Assets/HouseIcon.svg" alt="houseIcon" /></span>
                        <span>2 Bedroom Flat FOR RENT</span>
                        {/* <span>{props.house}</span> */}
                    </div>

                    <div>
                        <span><img src="../../../Assets/location.svg" alt="locationIcon"/></span>
                        <span>Lekki Phase 1, Lagos.</span>
                    </div>

                    <div>
                        <span><img src="../../../Assets/NairaIcon.svg" alt="NairaIcon"/></span>
                        <span><img src="../../../Assets/Nairaa.svg" alt=""/></span>
                        <span>2,500,000</span>
                        <span>per annum</span>
                    </div>
                    

                </Description>
            </CardCont>
        </Card>
    </Container>
  )
}

const Container = styled.div`
    height: 240px;
    width: 90%;
    margin: auto;
    margin-top: 10px;
    position: relative;
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    cursor: pointer;
`
const Card = styled.div`
    width: 100%;
    height: 230px;
    background-color: rgba(219, 242, 236, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const CardCont = styled.div`
    width: 90%;
    height: 200px;
    /* border: 1px solid black; */
    margin: auto;
    display: flex;
    flex-direction: rows;
    flex-wrap: nowrap;
    justify-content: space-evenly;
`

const Thumbnail = styled.div`
    width: 40%;
    height: 200px;
    /* border: 1px solid green; */
    background-color: #24272c;
    background-image: url("../../../Assets/IMG_5243.JPG");
    background-repeat:  no-repeat;
    background-size: cover;

    &>img{
        margin-left: 130px;
        margin-top: 60px;
    }
    
`

const Description = styled.div`
    width: 40%;
    height: 150px;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin-top: 20px;

    &>div>span{
        margin-left: 10px;


        font-family: 'Montserrat';
    }


`

export default Propertycard;