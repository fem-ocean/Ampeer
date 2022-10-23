import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


function Child1({setAllProperties}) {
  
  const btngroupone = ["Rent", "Shortlet"];
  
  const housegroup = ["Shared","1 Bedroom","2 Bedrooms","3 Bedrooms","4+ Bedrooms"];

  const minimumPriceRent = [{name:"No Minimum", value:0},{name:"N300,000", value:300000},{name:"N500,000", value:500000},{name:"N1,000,000", value: 1000000},{name:"N3,000,000", value: 3000000},{name:"N5,000,000", value:5000000},{name:"N10,000,000",value:10000000}];

  const maximumPriceRent = [{name:"No Maximum", value:1000000000},{name:"N300,000", value:300000},{name:"N500,000", value:500000},{name:"N1,000,000", value: 1000000},{name:"N3,000,000", value: 3000000},{name:"N5,000,000", value:5000000},{name:"N10,000,000",value:10000000}];

  const minimumPriceShortlet = [{name:"No minimum", value:0},{name:"N10,000", value:10000},{name:"N20,000", value:20000},{name:"N30,000",value:30000},{name:"N50,000", value:50000},{name:"N100,000", value:100000},{name:"N200,000", value:200000}, {name:"N500,000", value: 500000}];

  const maximumPriceShortlet = [{name:"No maximum", value:1000000000},{name:"N10,000", value:10000},{name:"N20,000", value:20000},{name:"N30,000",value:30000},{name:"N50,000", value:50000},{name:"N100,000"},{name:"N200,000", value:500000}, {name:"N500,000", value: 500000}];

 
  const [category, setCategory] = useState({categoryName: btngroupone[0]});
  const [houseType, setHouseType] = useState({houseName: housegroup[0]});
  const [minPrice, setMinPrice  ] = useState(minimumPriceRent[0].value);
  const [maxPrice, setMaxPrice  ] = useState(maximumPriceRent[0].value);
  const[errMsg, setErrMsg] = useState()


  
  const handleMinDropdownChange = (e) =>{
    setMinPrice(e.target.value)
  }
  const handleMaxDropdownChange = (e) =>{
    setMaxPrice(e.target.value)
  }

  const selectedCategory = category.categoryName;
  console.log(selectedCategory);

  const roomType = houseType.houseName;
  console.log(roomType);

  let startPrice = minPrice;
  console.log(startPrice)
  
  let endPrice = maxPrice;
  console.log(endPrice);
  

  // useEffect(()=>{
  //   axios({
  //     method: 'get',
  //     url: 'http://ampeer-001-site1.gtempurl.com/api/Account/GetAvailableProperties', 
  //     params: {
  //       categoryId: selectedCategory,
  //       roomTypeId: roomType,
  //       startPrice: startPrice,
  //       endPrice: endPrice,
  //     }
  //   })
  //   .then((res) =>{ 
  //     console.log(res.data)
  //     //get all properties based on query from api and send to the parent(main.js) and then to Child2
  //     setAllProperties(res.data)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //     setErrMsg(`There is something Wrong, ${err.message}`)

  //   })
    

  // },[])

 const handlePropertySearch = async () => {
    console.log(selectedCategory);
    console.log(roomType);
    console.log(startPrice);
    console.log(endPrice);
    
    await axios({
    method: 'get',
    url: 'http://ampeer-001-site1.gtempurl.com/api/Account/GetAvailableProperties', 
    params: {
      categoryId: selectedCategory,
      roomTypeId: roomType,
      startPrice: startPrice,
      endPrice: endPrice,
    }
  })
  .then((res) =>{ 
    console.log(res.data)
    //get all properties based on query from api and send to the parent(main.js) and then to Child2
    setAllProperties(res.data)
    alert('all is working fine')
  })
  .catch((err)=>{
    console.log(err)
    alert('something is wrong')
    console.log(selectedCategory)
    console.log(roomType)
    console.log(startPrice)
    console.log(endPrice)



    setErrMsg(`Something went wrong: ${err.message}`)
  })
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
            <select onChange={handleMinDropdownChange} >
                { selectedCategory==='Rent'? minimumPriceRent.map((price, key) =>(
                    <option key={key} value={price.value}>{price.name}</option>
                )):
                minimumPriceShortlet.map((price, key) =>(
                  <option key={key} value={price.value}>{price.name}</option>
                ))}
            </select>
          </div>
            
          <div>
            <label style={{"fontSize":"14px"}}>Maximum Price</label>
            <select onChange={handleMaxDropdownChange}>
                {selectedCategory==='Rent'? maximumPriceRent.map((price, key) =>(
                    <option key={key} value={price.value}>{price.name}</option>
                )):
                maximumPriceShortlet.map((price, key) =>(
                  <option key={key} value={price.value}>{price.name}</option>
                ))}
            </select>
          </div>
        </Price>

        <SearchDiv><SearchButton onClick={handlePropertySearch}>Search Property</SearchButton></SearchDiv>
      </Selections>
      {errMsg? <p style={{color:'red', textAlign:'center'}}>{errMsg}</p> : ''}
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
    height: 598px;
    
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

  
  p {
    font-size: 16px;
    font-weight: 600;
    color: black;
    /* font-family: 'Inter'; */
    line-height: 0px;
  }

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
