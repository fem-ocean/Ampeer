import axios from "axios";
import {locationList} from '../Components/Properties/Lekkiphase1'; 
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function AdminAddProperty() {
  const categoryOptions = ["Rent", "Shortlet"];

  const bedroomsOptions = [
    "Shared",
    "1 Bedroom",
    "2 Bedrooms",
    "3 Bedrooms",
    "4+ Bedrooms",
  ];

  const areaOptions = [
    "Oniru",
    "Lekki Phase 1",
    "Lekki Phase 1 (Right)",
    "Ikate",
    "Salem",
    "Ilasan",
    "Jakande",
    "Osapa",
    "Agungi",
    "Ologolo",
    "Igboefon",
    "Idado",
    "Newroad",
    "Chevron",
    "Conservation road",
    "Orchid road",
    "Ikota",
    "VGC",
    "Ajah",
    "Awoyaya",
  ];

  
  const [category, setCategory] = useState(categoryOptions[0]);
  const [roomType, setRoomType] = useState(bedroomsOptions[0]);
  const [location, setLocation] = useState(areaOptions[0]);
  const [price, setPrice] = useState(0);
  const [thumbnailImageUrl, setThumbnailImageUrl] = useState();
  const [interiorVideoUrl, setInteriorVideoUrl] = useState();
  const [compoundVideoUrl, setCompoundVideoUrl] = useState();
  const [streetVideoUrl, setStreetVideoUrl] = useState();

  const [imgUrl, setImgUrl] = useState("");
  const [intVidUrl, setIntVidUrl] = useState("");
  const [compVidUrl, setCompVidUrl] = useState("");
  const [streetVidUrl, setStreetVidUrl] = useState("");

  // categoryOptions[0]
  // bedroomsOptions[0]
  // areaOptions[0]

  console.log(category);
  console.log(roomType);
  console.log(location);
  console.log(price);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleBedroomsChange = (e) => {
    setRoomType(e.target.value);
  };
  const handleAreaChange = (e) => {
    setLocation(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  
  const handleimgChange = (e) => {
    setThumbnailImageUrl(e.target.files[0]);
  };
  console.log(thumbnailImageUrl);
  const handleIntVidChange = (e) => {
    setInteriorVideoUrl(e.target.files[0])
  };
  console.log(interiorVideoUrl);
  const handleCompChange = (e) => {
    setCompoundVideoUrl(e.target.files[0])
  };
  console.log(compoundVideoUrl);
  const handleStreetChange = (e) => {
    setStreetVideoUrl(e.target.files[0])
  };
  console.log(streetVideoUrl);


  const handleImageSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const imageRef = ref(storage, `ThumbnailImage/${thumbnailImageUrl.name}`)
    const uploadTask = uploadBytesResumable(imageRef, thumbnailImageUrl);
    uploadTask.on('state_changed', (snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(`Thumbnail ImageUpload is ${progress}% done`)
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadThumbnailImageURL)=>{
          console.log(`IMAGE FILE AVAILABLE AT ${downloadThumbnailImageURL}`)
          setImgUrl(downloadThumbnailImageURL)
        })
    }
    )
    uploadBytes(imageRef, thumbnailImageUrl)
      .then((snapshot) =>{
        alert('Thumbnail Image uploaded successfully')
      })
  }


  const handleIntVidSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const intVidRef = ref(storage, `InteriorVideos/${interiorVideoUrl.name}`)
    const uploadTask = uploadBytesResumable(intVidRef, interiorVideoUrl);
    uploadTask.on('state_changed', (snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(`Interior Video Upload is ${progress}% done`)
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadIntVidURL)=>{
          console.log(`INTERIOR VIDEO FILE AVAILABLE AT ${downloadIntVidURL}`)
          setIntVidUrl(downloadIntVidURL)
        })
    }
    )
    uploadBytes(intVidRef, interiorVideoUrl)
      .then((snapshot) =>{
        alert('Interior Video uploaded successfully')
      })
  }


  const handleCompVidSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const compVidRef = ref(storage, `CompoundVideos/${compoundVideoUrl.name}`)
    const uploadTask = uploadBytesResumable(compVidRef, compoundVideoUrl);
    uploadTask.on('state_changed', (snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(`Compound Video Upload is ${progress}% done`)
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadCompVidURL)=>{
          console.log(`COMPOUND VIDEO FILE AVAILABLE AT ${downloadCompVidURL}`)
          setCompVidUrl(downloadCompVidURL)
        })
    }
    )
    uploadBytes(compVidRef, compoundVideoUrl)
      .then((snapshot) =>{
        alert('Compound Video uploaded successfully')
      })
  }


  const handleStreetVidSubmit = (e) => {
    e.preventDefault();
    const storage = getStorage();
    const streetVidRef = ref(storage, `StreetVideos/${streetVideoUrl.name}`)
    const uploadTask = uploadBytesResumable(streetVidRef, streetVideoUrl);
    uploadTask.on('state_changed', (snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      console.log(`Street Video Upload is ${progress}% done`)
    },
    (error)=>{
      console.log(error)
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadStreetVidURL)=>{
          console.log(`STREET VIDEO FILE AVAILABLE AT ${downloadStreetVidURL}`)
          setStreetVidUrl(downloadStreetVidURL)
        })
    }
    )
    uploadBytes(streetVidRef, streetVideoUrl)
      .then((snapshot) =>{
        alert('Compound Video uploaded successfully')
      })
  }
  
  

  const handleFirebaseSubmit = async (e) =>{
    e.preventDefault();

  const querySnapshots = await getDocs(collection(db, 'Property'));
  const docSize = querySnapshots._snapshot.docChanges.length

    
    try{
      const docRef = await addDoc(collection(db, "Property"), {
          propertyId: docSize + 1, //get length of the document plus 1
          category: category,
          roomType: roomType,
          location: location,
          amount: price,
          thumbnailImageUrl: imgUrl,
          interiorVideoUrl: intVidUrl,
          compoundVideoUrl: compVidUrl,
          streetVideoUrl: streetVidUrl,
          isPropertyAvailable: true,
      });
      alert('Property successfully posted')
      console.log(`Document written with ID: `, docRef.id)
    }catch(e){
      alert(`There was an Error!`)
      console.log(`Error adding Document `, e)
    }
  }
  
 
    
  

  return (
    <div>
      <Helmet>
        <title>Add New Property</title>
      </Helmet>
      <FormHolder>
        <p>Backend - Firebase</p>
        <form
          // onSubmit={handleFormSubmitExample}
          onSubmit = {handleFirebaseSubmit}
          style={{ height: "500px" }}
          enctype="multipart/form-data"
        >
          <FormOne>
            <label>Category:</label>
            <select value={category} onChange={handleCategoryChange}>
              {categoryOptions.map((item, key) => (
                <option key={key}>{item}</option>
              ))}
            </select>

            <label>Bedrooms:</label>
            <select value={roomType} onChange={handleBedroomsChange}>
              {bedroomsOptions.map((item, key) => (
                <option key={key}>{item}</option>
              ))}
            </select>

            <label>Area:</label>
            <select value={location} onChange={handleAreaChange}>
              {areaOptions.map((item, key) => (
                <option key={key}>{item}</option>
              ))}
            </select>

            <label>Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              min="100000"
              max="50000000"
              placeholder="Price of property"
              value={price}
              onChange={handlePriceChange}
            ></input>
          </FormOne>

          <FormTwo>
            <BoxOne>
              <BoxOneCont>
                <label>Thumbnail Picture</label>
                <input
                  type="file"
                  name="picture"
                  accept="image/png, image/gif, image/jpeg"
                  // value={thumbnailImageUrl}
                  onChange={handleimgChange}
                ></input>
                <button onClick={handleImageSubmit}>Submit</button>
              </BoxOneCont>
            </BoxOne>
            <BoxTwo>
              <BoxTwoCont>
                <label>Interior Video</label>
                <input
                  type="file"
                  name="intvideo"
                  accept="video/*"
                  onChange={handleIntVidChange}
                  // value={interiorVideoUrl}
                ></input>
                <button onClick={handleIntVidSubmit}>Submit</button>
              </BoxTwoCont>
            </BoxTwo>
            <BoxThree>
              <BoxThreeCont>
                <label>Compound Video</label>
                <input
                  type="file"
                  name="compvideo"
                  accept="video/*"
                  onChange={handleCompChange}
                ></input>
                <button onClick={handleCompVidSubmit}>Submit</button>
              </BoxThreeCont>
            </BoxThree>
            <BoxFour>
              <BoxFourCont>
                <label>Street Video</label>
                <input
                  type="file"
                  name="streetvideo"
                  accept="video/*"
                  onChange={handleStreetChange}
                ></input>
                <button onClick={handleStreetVidSubmit}>Submit</button>
              </BoxFourCont>
            </BoxFour>
          </FormTwo>

          <div style={{ margin: "auto", width: "365px" }}>
            <Input />
          </div>
        </form>
      </FormHolder>
    </div>
  );
}

const FormHolder = styled.div`
  width: 90%;
  height: 550px;
  border: 4px solid #dbf2ec;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    height: 800px;
  }
`;

const FormOne = styled.div`
  width: 90%;
  height: 80px;
  /* border: 1px solid green;   */
  margin: auto;
  padding: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 290px;
  }
`;

const FormTwo = styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* border: 3px solid blue; */
  justify-content: space-evenly;
  align-items: center;
  margin-top: 120px;
  margin: auto;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    flex-direction: column;
  }
`;

const BoxOne = styled.div`
  width: 400px;
  height: 100px;
  position: relative;
  /* border: 1px solid red; */
  background: rgba(219, 242, 236, 0.2);

  @media (max-width: 768px) {
    width: 95%;
    label {
      font-size: 12px;
    }
  }
`;

const BoxTwo = styled(BoxOne)``;

const BoxThree = styled(BoxOne)``;

const BoxFour = styled(BoxOne)``;

const BoxOneCont = styled.div`
  width: 80%;
  height: 60px;
  /* border: 1px solid purple; */
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const BoxTwoCont = styled(BoxOneCont)``;

const BoxThreeCont = styled(BoxOneCont)``;

const BoxFourCont = styled(BoxOneCont)``;

const Input = styled.input.attrs({ type: "submit", value: "Add Property" })`
  background: rgba(44, 142, 113, 0.95);
  color: white;
  border: none;
  width: 300px;
  height: 60px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  transition: 0.2s;
  text-align: center;
  &:hover {
    background-color: rgba(44, 142, 113, 1);
  }
`;

export default AdminAddProperty;
