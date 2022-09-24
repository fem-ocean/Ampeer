import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import api from "../api/getProperties";

function Child1({setAllProperties}) {
  const btngroupone = ["Rent", "Shortlet"];
  
  const housegroup = ["Shared","1 bedrooms","2 bedrooms","3 bedrooms","4+ bedrooms"];

  const minimumPriceRent = [{name:"No Minimum", value:0},{name:"N200,000", value:200000},{name:"N400,000", value:400000},{name:"N800,000", value: 800000},{name:"N1,000,000", value: 1000000},{name:"N5,000,000", value:5000000},{name:"N10,000,000",value:10000000}];

  const maximumPriceRent = [{name:"No Maximum", value:0},{name:"N200,000", value:200000},{name:"N400,000", value:400000},{name:"N800,000", value: 800000},{name:"N1,000,000", value: 1000000},{name:"N5,000,000", value:5000000},{name:"N10,000,000",value:10000000}];

  const minimumPriceShortlet = [{name:"No minimum", value:0},{name:"N10,000", value:10000},{name:"N20,000", value:20000},{name:"N30,000",value:30000},{name:"N50,000", value:50000},{name:"N100,000"},{name:"N200,000", value:500000}, {name:"N500,000", value: 500000}];

  const maximumPriceShortlet = [{name:"No maximum", value:0},{name:"N10,000", value:10000},{name:"N20,000", value:20000},{name:"N30,000",value:30000},{name:"N50,000", value:50000},{name:"N100,000"},{name:"N200,000", value:500000}, {name:"N500,000", value: 500000}];

 
  const [category, setCategory] = useState({categoryName: btngroupone[0]});
  const [houseType, setHouseType] = useState({houseName: housegroup[0]});
  const [minPrice, setMinPrice] = useState({minRent: minimumPriceRent[0].value, minShortlet: minimumPriceShortlet[0].value});
  const [maxPrice, setMaxPrice] = useState({maxRent: maximumPriceRent[0].value, maxShortlet: maximumPriceShortlet[0].value})

  
  const handleDropdownChange = (e) =>{
    setMinPrice({[e.target.name]: e.target.value})
    setMaxPrice({[e.target.name]: e.target.value})

  }

  const categoryId = btngroupone.indexOf(category.categoryName) + 1;
  // console.log(categoryId);
  const roomTypeId = housegroup.indexOf(houseType.houseName) + 1;
  // console.log(roomTypeId);
  let startPrice = minPrice;
  // console.log(startPrice)
  let endPrice = maxPrice;
  // console.log(endPrice)

  
  // setCategoryId(categoryId);
  // setRoomTypeId(roomTypeId);
  // setStartPrice(startPrice);
  // setEndPrice(endPrice);
  

// const handlePropertySearch = async (e) => {
//   e.preventDefault();
  
//   try{
//       const response = (categoryId, roomTypeId, locationId, startPrice, endPrice) => {
//          api.get('/GetAvailableProperties?categoryId={categoryId}&roomTypeId={roomTypeId}&locationId={locationId}&startPrice={startPrice}&endPrice={endPrice}')
//       }
//       console.log(response.data)
//   }catch(err){
//       console.log(err)
//   }

// }

 const handlePropertySearch = (categoryId, roomTypeId, locationId, startPrice, endPrice) => {
  axios({
    method: 'get',
    url: 'http://ampeer-001-site1.gtempurl.com/api/Account/GetAvailableProperties', 
      params: {
        categoryId: {categoryId},
        roomTypeId: {roomTypeId},
        locationId: 1,
        startPrice: {startPrice},
        endPrice: {endPrice}
    }
  })
  .then((res) =>{ 
    console.log(res)
    //get all properties based on query from api and send to main.js
    setAllProperties()
  })
  .catch((err)=>console.log(err))
  }

  return (
    <>
      <Selections>
        <ShortletRent>
          {btngroupone.map((item) => (
            <RentButton
              key={item}
              categoryName ={category.categoryName === item}
              onClick={() => {
                setCategory({categoryName: item});
              }}
            >
              <p>{item}</p>
            </RentButton>
          ))}
        </ShortletRent>

        <HouseType>
          {housegroup.map((item) => (
            <Shared
              key={item}
              houseType={houseType.houseName === item}
              onClick={() => {
                setHouseType({houseName: item});
              }}
            >
              <p>{item}</p>
            </Shared>
          ))}
        </HouseType>

        <Price>
          <div>
            <label style={{"fontSize":"14px"}}>Minimum Price</label>
            <select onChange={handleDropdownChange} value={minPrice.minRent}>
                { categoryId===1? minimumPriceRent.map((price, key) =>(
                    <option 
                    key={key}
                    >{price.name}</option>
                )):
                minimumPriceShortlet.map((price, key) =>(
                  <option key={key}>{price.name}</option>
                ))}
            </select>
          </div>
            
          <div>
            <label style={{"fontSize":"14px"}}>Maximum Price</label>
            <select onChange={handleDropdownChange} value={maxPrice.maxRent}>
                {categoryId===1? maximumPriceRent.map((price, key) =>(
                    <option key={key}>{price.name}</option>
                )):
                maximumPriceShortlet.map((price, key) =>(
                  <option key={key}>{price.name}</option>
                ))}
            </select>
          </div>
            

        </Price>

        <SearchDiv><SearchButton onClick={handlePropertySearch}>Search Property</SearchButton></SearchDiv>


      </Selections>
    </>
  );
}

const Selections = styled.div`
  width: 95%;
  height: 250px;
  margin: auto;
  border: 1px solid #dbf2ec;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  /* flex-wrap: wrap; */

  @media (max-width: 768px) {
    height: 490px;
    
  }
`;

const ShortletRent = styled.div`
  width: 70%;
  height: 60px;
  /* border: 1px solid yellow; */
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    height: 10px;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 140px;
  }
`;

const HouseType = styled.div`
  width: 100%;
  height: 80px;
  /* border: 1px solid yellow; */
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
    height: 140px;
    margin-top: 10px;
  }
`;

const RentButton = styled.button`
  background-color: white;
  border: 2px solid #2c8e71;
  width: 150px;
  height: 42px;
  text-align: center;
  


  ${({ categoryName }) =>
    categoryName &&
    `
        background: #2c8e71;
        p{
            color: #ffffff;
        }
    `}

  border-radius: 4px;
  cursor: pointer;

  p {
    font-size: 16px;
    font-weight: 600;
    color: "black";
    /* font-family: 'Inter'; */
    line-height: 0px;
  }
`;

const Price = styled.div`
    width: 80%;
    height: 70px;
    /* border: 1px solid red; */
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 30px;
    height: 90px;
  }
`

const Shared = styled.button`
  border: 1px solid #2c8e71;
  width: 130px;
  height: 40px;
  background: none;
  border-radius: 5px;
  /* box-shadow: 0px 0px 13px 4px rgba(0, 0, 0, 0.25); */
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
    color: black;
    line-height: 0px;
    /* font-family: 'Inter'; */
  }

  ${({ houseType }) =>
    houseType &&
    `
        background: #2c8e71;
        p{
            color: #ffffff;
        }
    `}
`

const SearchDiv = styled.div`
  margin: auto;
`

const SearchButton = styled.button`
  width: 250px;
  height: 50px;
  background-color: #2c8e71;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  /* font-weight: 700;   */
  font-size: 16px;
  letter-spacing: 2px;
`

export default Child1;
