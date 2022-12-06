import axios from "axios";
import {locationList} from '../Components/Properties/Lekkiphase1'; 
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

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

  const [category, setCategory] = useState();
  const [roomType, setRoomType] = useState();
  const [location, setLocation] = useState();
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

  
  const handleFormSubmitExample = (e) => {
    
    e.preventDefault();

    // Picture FormData Object
    var pictureFormData = new FormData();
    var intVidFormData = new FormData();
    var compVidFormData = new FormData();
    var streetVidFormData = new FormData();


    //update the FormData object for each files
    pictureFormData.append('file', thumbnailImageUrl);
    pictureFormData.append('upload_preset', "yr12fgfl");
    pictureFormData.append('folder', "thumbnailPicture")

    intVidFormData.append('file', interiorVideoUrl);
    intVidFormData.append('upload_preset', "yr12fgfl");
    intVidFormData.append('folder', "interiorVideo")

    compVidFormData.append('file', compoundVideoUrl);
    compVidFormData.append('upload_preset', "yr12fgfl");
    compVidFormData.append('folder', "compoundVideo");

    streetVidFormData.append('file', streetVideoUrl);
    streetVidFormData.append('upload_preset', "yr12fgfl");
    streetVidFormData.append('folder', "streetVideo");


    axios.all([
      axios.post(`https://api.cloudinary.com/v1_1/dvvqaai3z/image/upload`, pictureFormData),
      axios.post(`https://api.cloudinary.com/v1_1/dvvqaai3z/video/upload`, intVidFormData),
      axios.post(`https://api.cloudinary.com/v1_1/dvvqaai3z/video/upload`, compVidFormData),
      axios.post(`https://api.cloudinary.com/v1_1/dvvqaai3z/video/upload`, streetVidFormData),
    ])
    .then((res)=>{
      console.log(res[0].data.url)
      setImgUrl(res[0].data.url)
      console.log(res[1].data.url)
      setIntVidUrl(res[1].data.url)
      console.log(res[2].data.url)
      setCompVidUrl(res[2].data.url)
      console.log(res[3].data.url)
      setStreetVidUrl(res[3].data.url)
      axios({
        method: "post",
        url: "http://ampeer-001-site1.gtempurl.com/api/Admin/CreateProperty",
        data: {
          propertyId: "53",
          category: category,
          roomType: roomType,
          location: location,
          amount: price,
          thumbnailImageUrl: imgUrl,
          interiorVideoUrl: intVidUrl,
          compoundVideoUrl: compVidUrl,
          streetVideoUrl: streetVidUrl,
          isPropertyAvailable: true,
        }
      })
      .then((res)=>{
        console.log(res)
        alert('Yayy!!! Property posted to Database successfully!')
      })
      .catch(err=>{
        console.log(err)
        alert('Something went wrong while posting property to Database')
      })
    })
    .catch((err)=>{
      console.log(err)
      alert('Something went Wrong while try to create the property')
    })
   
    console.log(imgUrl);
    
  }
    
  

  return (
    <div>
      <Helmet>
        <title>Add New Property</title>
      </Helmet>
      <FormHolder>
        <p>Testing with Cloudinary</p>
        <form
          onSubmit={handleFormSubmitExample}
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
