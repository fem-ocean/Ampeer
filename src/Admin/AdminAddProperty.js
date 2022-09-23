import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

function AdminAddProperty() {
  const categoryOptions = ["Rent", "Shortlet"];

  const bedroomsOptions = [
    "Shared",
    "1 bedroom",
    "2 bedrooms",
    "3 bedrooms",
    "4+ bedrooms",
  ];

  const areaOptions = [
    "Oniru",
    "Lekki phase1",
    "Lekki phase1 (right)",
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


  // categoryOptions[0]
  // bedroomsOptions[0]
  // areaOptions[0]

  console.log(category);
  console.log(roomType);
  console.log(location);
  console.log(price);

  const handleCategoryChange = (e) =>{
    setCategory(e.target.value)
  }
  const handleBedroomsChange = (e) =>{
    setRoomType(e.target.value)
  }
  const handleAreaChange = (e) =>{
    setLocation(e.target.value)
  }
  const handlePriceChange = (e) =>{
    setPrice(e.target.value)
  }
  const handleimgChange = (e) =>{
    setThumbnailImageUrl(URL.createObjectURL(e.target.files[0]))
  };
  console.log(thumbnailImageUrl)

  const handleIntVidChange = (e) =>{
    setInteriorVideoUrl(URL.createObjectURL(e.target.files[0]))
  }
  console.log(interiorVideoUrl)

  const handleCompChange = (e) =>{
    setCompoundVideoUrl(URL.createObjectURL(e.target.files[0]))
  }
  console.log(compoundVideoUrl)

  const handleStreetChange = (e) =>{
    setStreetVideoUrl(URL.createObjectURL(e.target.files[0]))
  }
  console.log(streetVideoUrl)



  
  const handleFormSubmit = async (e) => {
    //created a FormData object
    const formData = new FormData();

    const string = "string"
    
    // //update the FormData object
    // formData.append('propertyId', 10);
    // formData.append('category', category);
    // formData.append('roomType', roomType);
    // formData.append('location', location);
    // formData.append('amount', price);
    // formData.append('thumbnailImageUrl',string);
    // formData.append('interiorVideoUrl', string );
    // formData.append('compoundVideoUrl', string );
    // formData.append('streetVideoUrl', string);
    // formData.append('isPropertyAvailable', true);




    console.log('%O',formData)
    console.dir(formData,{
      Depth: null
    })
    
    console.log(thumbnailImageUrl)


    e.preventDefault();
    await axios({
      method: 'post',
      url: 'http://ampeer-001-site1.gtempurl.com/api/Admin/CreateProperty',
      // formData
      data:{
        propertyId: '10',
        category: category,
        roomType: roomType,
        location: location,
        amount: price,
        thumbnailImageUrl: thumbnailImageUrl,
        interiorVideoUrl: interiorVideoUrl,
        compoundVideoUrl: compoundVideoUrl,
        streetVideoUrl: streetVideoUrl,
        isPropertyAvailable: true,
      }
    })
    .then((res)=>{
      console.log(res)
      alert(res.data.responseMessage)
    })
    .catch((err)=> console.log(err))
  }

 

  // const form = {
  //   height: "500px",
  // };

  return (
    <div>
      <Helmet>
          <title>Add New Property</title>
      </Helmet>
      <FormHolder>
        <form onSubmit={handleFormSubmit} style={{height:'500px'}}>
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

  @media (max-width){
    height: 780px;
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
`;

const FormTwo = styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  /* border: 3px solid blue; */
  justify-content: space-evenly;
  align-items: center;
  margin-top: 120px;
  margin: auto;

  @media (max-width:768px){
    margin-bottom: 40px;
  }
`;

const BoxOne = styled.div`
  width: 500px;
  height: 100px;
  position: relative;
  /* border: 1px solid red; */
  background: rgba(219, 242, 236, 0.2);
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
