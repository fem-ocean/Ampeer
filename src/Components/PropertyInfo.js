import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "./Footer";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import App from "../fluttterwave/flutterwave";
import { db } from "../firebase";
import { collection, doc, getDoc, setDoc, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { ref } from "firebase/storage";


function PropertyInfo(props) {
  const { id } = useParams();
  console.log(id);



  const [detail,setDetail] = useState();
  // console.log(detail) 
  const [error, setError] = useState();
  const [interior, setInterior] = useState(true);
  const [compound, setCompound] = useState(false);
  const [street, setStreet] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [flutterwaveResponse, setFlutterwaveResponse] = useState({});
  const [isPaid, setIsPaid] = useState(false);


  
  
  // setPropertyId(id)



  const auth = getAuth();

  

  console.log(auth.currentUser)
  updateProfile(auth.currentUser, {
    isPaid: false
  }).then(()=>{
    console.log("profile is updated")
  }).catch((err)=>{
    console.log("There was an error")
  })
  console.log(auth.currentUser)

  
  
  useEffect(() => {

    const userId = auth.currentUser.uid
    
    if (props.loggedIn) {
      setAuthenticated(props.loggedIn);
    }
   
    const fetchSingleData = async () => {
      console.log(id)
      try{
        const docRef = doc(db, 'Property', `${id}`)
        await getDoc(docRef)
          .then((doc)=>{
            console.log(doc.data(), doc.id)
            setDetail(doc.data())
          })
          .catch((err)=>{
            console.log(err)
          })
      }catch(err){
        console.log(err)
      }
        
    }

    const checkUserPaid = async () => {
      try{
        const userRef = doc(db,'Users',userId)
        const userSnap = await getDoc(userRef)
        console.log(userId)
        if(userSnap.exists()){
          const user = userSnap.data()
          // console.log(userSnap.data())
          setIsPaid(user.isPaid)
        }
      }catch(err){
        console.log(err)
      }
    }

    if(userId){
      checkUserPaid();
    }
    fetchSingleData();

    
    

    // axios({
    //   method: "get",
    //   url: url,
    // })
    //   .then((res) => {
    //     setDetail(res.data);
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     setError(`Something went wrong: ${err.message}`);
    //   });
  }, [id]);

  console.log(detail)

  if (flutterwaveResponse.status === 'successful'){
    console.log('payment successful')
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5001/ampeer-bac80/us-central1/api/',
      params:{
        user: auth.currentUser.uid,
      }
    })
    .then(res=>{
      console.log(res)
      alert('Payment successfully registered on the backend with UID' + auth.currentUser.uid)
    })
    .catch(err=>console.log(err))
  }
  

  const handleStreetVideo = (e) => {
    setStreet(true);
    setInterior(false);
    setCompound(false);
  };

  const handleCompoundVideo = (e) => {
    setCompound(true);
    setInterior(false);
    setStreet(false);
  };

  const handleInteriorVideo = (e) => {
    setCompound(false);
    setInterior(true);
    setStreet(false);
  };

  console.log(props.loggedIn);
  
  console.log(authenticated);

  
  console.log(flutterwaveResponse)

  // videoInterior={?rl(${.a.interiorVideoUrl})` : null}

//if the user is not signed in return to the redirect to the homepage else show the propertyinfo page
  if (!props.loggedIn) {
    alert("You must login first to view videos")
    return < Navigate replace to="/" />
  } else {
  
  return (
    <div>
      <Helmet>
        <title>Videos || Ampeer is Life</title>
      </Helmet>

      {/* if there is an error eg network error */}
      {/* {error ? <p>{error}</p> : null} */}

      <Headline>
        <PropertyVideos>
          <Thumbnail id="jumbotron">
            { interior && (
              <video width="99%" height="390px" controls autoPlay>
                {detail && <source src={detail.interiorVideoUrl} type="video/mp4" />}
              </video>
            )}

            { compound && isPaid && (
              <video width="100%" height="100%" controls autoPlay>
                {detail && <source src={detail.compoundVideoUrl} type="video/mp4" /> }
              </video>
            )}

            { street && isPaid && (
              <video width="100%" height="100%" controls autoPlay>
                {detail && <source src={detail.streetVideoUrl} type="video/mp4" /> }
              </video>
            )}
          </Thumbnail>

          {/* User select the video they want to watch */}
          <SelectThumbnail>
            
            <StreetVideo onClick={handleStreetVideo}>
              {isPaid &&
              <>
                <video width="100%" height="100%">
                  {detail && <source src={detail.streetVideoUrl} type="video/mp4" />}
                </video>
                <p>Street</p>
              </>
              }
              {!isPaid &&
              <>
                <p>Street</p>
                <Cover></Cover>
              </>
              }
            </StreetVideo>
            
            <CompoundVideo onClick={handleCompoundVideo}>
            {isPaid &&
              <>
                <video width="100%" height="100%">
                  {detail && <source src={detail.compoundVideoUrl} type="video/mp4" />}
                </video>
                <p>Compound</p>
              </>
            }
            {!isPaid &&
              <>
                <p>Compound</p>
                <Cover></Cover>
              </>
            }
            </CompoundVideo>

            <InteriorVideo onClick={handleInteriorVideo}>
                <video width="100%" height="100%">
                  {detail && <source src={detail.interiorVideoUrl} type="video/mp4" />}
                </video>
              <p>Interior</p>
            </InteriorVideo>

          </SelectThumbnail>
        </PropertyVideos>

        <DescGroup>
          {/* <Description>
            
              <>
                <div>
                  <span><img src="../../../Assets/HouseIcon.svg" alt="houseIcon" /></span>
                  <span>
                    {" "}
                    {detail.data.roomType} Flat for {detail.data.category}
                  </span>
                </div>
                <div>
                  <span><img src="../../../Assets/location.svg" alt="locationIcon"/></span>
                  <span>{detail.data.location}, Lagos.</span>
                </div>
                <div>
                  <span><img src="../../../Assets/NairaIcon.svg" alt="NairaIcon"/></span>
                  <span>
                    <img src="../../../Assets/NairaBasket.svg" alt="" />
                  </span>
                  {detail.data.category === "Shortlet" ? (
                    <span>{detail.data.amount} per night</span>
                  ):(
                    <span>{detail.data.amount} per annum</span>
                  )}
                  <span>per annum</span>
                </div>
              </>
            ):(
              <p>Something went wrong</p>
            )
          </Description> */}

          <PayPrompt>
            <p>
              <strong>Cool with the interior?</strong>
            </p>

            <p>
              Get access to view as many properties as possible including the
              street and compound for only{" "}
              <strong>2,000 Naira per month.</strong>
            </p>
          </PayPrompt>

          {!isPaid && <App setIsPaid={setIsPaid} />}

          {/* <PayButton>
                    <p>PAY N2,000 </p>
                </PayButton> */}
        </DescGroup>
      </Headline>

      <div
        style={{
          marginBottom: "100px",
          margin: "auto",
          //  border: '1px solid red',
          width: "70%",
        }}
      >
        <img src="./../../Assets/Group 2858.jpg" alt="" width="100%" />
      </div>

      <Footer />
    </div>
  );
 }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

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

  @media (max-width: 768px) {
    flex-direction: column;
    height: 1100px;
    justify-content: start;
  }
`;
const DescGroup = styled.div`
  width: 28%;
  height: 500px;
  border: 3px solid #dbf2ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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

  & > div > span {
    margin-left: 5px;
    font-weight: 600;
    font-size: 18px;
    margin-left: 0px;
  }
`;

const PayPrompt = styled.div`
  width: 95%;
  height: 180px;
  /* border: 1px solid red; */
  background-color: rgba(217, 242, 236, 0.5);

  & > p {
    font-size: 14px;
    line-height: 25px;
    text-align: justify;
  }
`;

const PayButton = styled.button`
  border: none;
  width: 300px;
  height: 50px;
  background: #2c8e71;
  border-radius: 4px;
  cursor: pointer;

  & > p {
    color: white;
    font-weight: 700;
    font-size: 16px;
  }
`;

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

  @media (max-width: 768px) {
    width: 95%;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Thumbnail = styled.div`
  width: 97%;
  height: 400px;
  /* border: 1px solid blue; */
  /* background-color: #24272c; */
  /* background-image: url("../../../Assets/IMG_5243.JPG"); */
  /* background-image: ${(props) => props.videoInterior}; */
  /* background-repeat:  no-repeat; */
  /* background-size: cover; */
  /* cursor: pointer; */
  /* margin: auto; */
  position: relative;

  @media (max-width: 768px) {
    img {
      width: 80px;
      position: absolute;
      top: 5%;
      left: -40%;
    }
  }

  & > img {
    margin-left: 250px;
    margin-top: 150px;
  }
`;

const SelectThumbnail = styled.div`
  width: 85%;
  height: 100px;
  /* border: 1px solid yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const StreetVideo = styled.div`
  width: 100px;
  height: 80px;
  position: relative;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* justify-content: space-between; */
  ;

  
  & > p {
    font-size: 12px;
    line-height: 0px;
    margin: auto;
    font-weight: 600;
    color: rgb(0, 0, 0);

    
    /* ${({isPaid}) => !isPaid &&
      `color: rgba(0, 0, 0, 0.5);
      `
    } */

  }

  @media (max-width: 768px) {
    width: 80px;
  }
`;

const CompoundVideo = styled(StreetVideo)``;

const InteriorVideo = styled(StreetVideo)`
  & > p {
    color: rgb(0, 0, 0);
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 90%;
  position: absolute;
  background-color: #24272c;
  background-color: rgba(36, 39, 44, 0.3);
`;

const ExtVid = styled.div`
  width: 100%;
  height: 60px;
  /* border: 1px solid purple; */
  background-color: #24272c;
  background-image: url("../../../Assets/IMG_5243.JPG");
  background-size: cover;
  position: relative;
`;

const CompVid = styled(ExtVid)`
  background-image: url("../../../Assets/IMG_5250.JPG");
`;

const IntVid = styled(ExtVid)`
  background-image: url("../../../Assets/IMG_5243.JPG");
`;

export default connect(mapStateToProps, null)(PropertyInfo);
