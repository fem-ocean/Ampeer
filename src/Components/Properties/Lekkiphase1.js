import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Propertycard from './Propertycard';





function Lekkiphase1({location, allProperties}) {

    const locationList = ["Oniru", "Lekki Phase 1", "Lekki Phase 1 (Right)", "Ikate", "Salem", "Ilasan", "Jakande", "Osapa", "Agungi", "Ologolo", "Igboefon", "Idado", "New Road", "Chevron", "Conservation Road", "Orchid", "Ikota", "VGC", "Ajah", "Awoyaya"]

    const[isActive, setIsActive] = useState(false);

    // const[fetchedProperties, setFetchedProperties] = useState([]);

    
    

    


    // console.log(fetchedProperties)
    // console.log(fetchedProperties.length)
    // console.log(allProperties.data.location)

    // let filteredProperties = allProperties.data.filter(property=>property.location === {location})

    // console.log(filteredProperties)

    useEffect(()=>{
        // const result = allProperties.data;

        // console.log(result)
        // const final = result.filter(function(item){
        //     return item.location === 'Osapa'
        // })
        // console.log(final)

    },[])
  

    const handleDropdownBtnClick = (e) =>{
        setIsActive(!isActive);
    }

  

  return (
    
    <Lekkiph1Dropdown>
        
        
        <DropdownBtn onClick={handleDropdownBtnClick}>
            <div><p>{location}</p></div>
            <div>
                <i> Properties</i>
                {/* <img src="../../../Assets/Polygon 2.svg" alt="dropArrow"/> */}
            </div>
        </DropdownBtn>
        
        {isActive && (
            
            // locationId===allProperties.locationId?
            // allProperties.map((item)=>(
            //     <DropdownContent>
            //         <Propertycard item={item}/>
            //     </DropdownContent>

            
            // : null
        

                    {/* i will need to remove this below cos its hard coded */}
            //  <DropdownContent>
            
            //     <DropdownItem>
            //      </DropdownItem>
                
            //     <DropdownItem>
            //          <Propertycard />
            //      </DropdownItem>
                
            //      <DropdownItem>
            //          <Propertycard />
            //      </DropdownItem>

            //      <DropdownItem>
            //          <Propertycard />
            //      </DropdownItem>

            //  </DropdownContent>
            
        )}
        
    </Lekkiph1Dropdown>
  )
}

const Lekkiph1Dropdown = styled.div`
    width: 100%;
    height:max-content;
    /* position: absolute; */
    margin-top: 20px;
    /* border: 1px solid blue; */
    
    @media(max-width: 768px){
        /* width: 30%; */
    }


`

const DropdownBtn = styled.div`
    width: 100%;
    height: 48px;
    background-color: #dbf2ec;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);

    &> div{
        width: 300px;
        height: 30px;
        /* border: 1px solid green; */
        display: flex;
    }
    & > div >p{
        font-weight: 600;
        font-size: 16px;
        margin: auto;
        text-align: center;

        @media(max-width: 768px){
            font-size: 10px;
        }
    }
    &> div> i{
        margin: auto;
        font-size: 14px;
        font-weight: 300;

    }
`

const DropdownContent = styled.div`
    height: auto;
`

const DropdownItem = styled.div``



export default Lekkiphase1;