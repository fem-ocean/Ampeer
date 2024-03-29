import React from 'react';
import styled from 'styled-components';
import EditAndDelete from '../EditAndDelete';
import { Link } from "react-router-dom"
import AllProperties from './AllProperties';
import Property  from './AllProperties'
import axios from 'axios';
import { connect } from 'react-redux';

function Propertycard(props) {

    console.log(props.item);

    console.log(props.item.documentID)
    console.log(props.item.documentData)

    // console.log(props.item.doc.id)

    
    

    console.log(props.item.documentData.thumbnailImageUrl)

    // const [backgroundImg, setBackgroundImg] = useState();

    // setBackgroundImg(item.thumbnailImageUrl);

    // console.log(backgroundImg)

    console.log(props.loggedIn)
    if(props.loggedIn){
        console.log("Printed")
        console.log(props.loggedIn)
    }else{
        console.log("Not found oo")
    }


    
  return (
    
    
    <Link to={`/info/${props.item.documentID}`}>
        <Container>
            <Card>
                <CardCont>
                
                    {/* item.thumbnailpicture to use the properties from item.   */}
        
                    <Thumbnail thumbnailImage={`url(${props.item.documentData.thumbnailImageUrl})`}></Thumbnail>
                    
                    
                    <Description>
                        <div>
                            <span><img src="../../../Assets/HouseIcon.svg" alt="houseIcon" /></span>
                            <span><p>{props.item.documentData.roomType} Flat FOR {props.item.documentData.category}</p></span>
                            {/* <span>{props.house}</span> */}
                        </div>

                        <div>
                            <span><img src="../../../Assets/location.svg" alt="locationIcon"/></span>
                            <span><p>{props.item.documentData.location}, Lagos.</p></span>
                        </div>

                        <div>
                            <span><img src="../../../Assets/NairaIcon.svg" alt="NairaIcon"/></span>
                            <span><img src="../../../Assets/Nairaa.svg" alt=""/></span>
                            <span><p style={{'fontWeight': 'bold'}}>N{props.item.documentData.amount} / annum</p></span>
                            {/* <span className='duration'><p>per annum</p></span> */}
                        </div>
                    </Description>
                </CardCont>

            {(window.location.href === 'http://localhost:3000/adminlogin/home' || 
            window.location.href === 'https://ampeer.netlify.app/adminlogin/home') && <EditAndDelete />}
            </Card>
        </Container>
    </Link>
    
)
}

const mapStateToProps = state =>{
    return{
      loggedIn: state.loggedIn,
    }
}
  
//   const mapDispatchToProps = (dispatch) =>{
//     return{
//     //   signIn: ()=>dispatch(signIn()),
//     //   signOut: ()=>dispatch(signOut())
//     }
//   }

const Container = styled.div`
    height: 240px;
    width: 95%;
    margin: auto;
    margin-top: 10px;
    position: relative;
    /* border: 1px solid yellow; */
    display: flex;
    flex-direction: column;
    cursor: pointer;

    @media (max-width: 768px){
        width: 95%;
        height: 210px;
    }
`
const Card = styled.div`
    width: 100%;
    height: 230px;
    background-color: rgba(219, 242, 236, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */

    @media (max-width: 768px){
        height: 180px;
    }
    
`
const CardCont = styled.div`
    width: 90%;
    height: 200px;
    /* border: 1px solid black; */
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;

    @media (max-width:768px){
        width: 100%;
        justify-content: space-between;
        height: 155px;
    }
`

const Thumbnail = styled.div`
    width: 40%;
    height: 200px;
    /* border: 1px solid green; */
    background-color: #24272c;
    background-image: ${props => props.thumbnailImage};)
    /* background-image: url('http://res.cloudinary.com/dvvqaai3z/image/upload/v1665924089/thumbnailPicture/iwnn91un4oymddgqogxy.png'); */
    background-repeat:  no-repeat;
    background-size: cover;
    position: relative;



    &>img{
        margin-left: 130px;
        margin-top: 60px;
        position: absolute;
        /* margin: auto; */
        /* top: 50%; */
        /* left: 50%; */
        
        @media (max-width: 768px){
            margin-left: 58px;
            margin-top: 38px;
            width: 50px;
        }
    }

    @media (max-width: 768px){
        height: 145px;
        width: 60%;
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

        img{
            display: none;
        }

        @media (max-width: 768px){
            font-size: 10px;
        }
    }

    &>div>span>p{
        margin: 0px;
    }


    @media (max-width: 768px){
        width: auto;
        height: 100px;
        margin-left: 5px;
    }

`

export default connect(mapStateToProps, null)(Propertycard);