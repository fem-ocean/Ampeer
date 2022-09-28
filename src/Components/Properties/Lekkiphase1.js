import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Propertycard from './Propertycard';





function Lekkiphase1({location, allProperties}) {

    const locationList = ["Oniru", "Lekki Phase 1", "Lekki Phase 1 (Right)", "Ikate", "Salem", "Ilasan", "Jakande", "Osapa", "Agungi", "Ologolo", "Igboefon", "Idado", "New Road", "Chevron", "Conservation Road", "Orchid", "Ikota", "VGC", "Ajah", "Awoyaya"]

    const[isActive, setIsActive] = useState(false);


    // const[fetchedProperties, setFetchedProperties] = useState([]);

    
    
        
        //Filtering fetched properties from child1 and comparing them with location prop  in LekkiPhase1 component
        
            
        console.log(allProperties.data)
        console.log({location})
        let locationValue = Object.values({location})
        console.log(locationValue)
        let area = locationValue[0]
        console.log(area) 
        
            
            
        if (!allProperties.data){
            var filteredProperties = []
            // return filteredProperties
        }
        else{
            var filteredProperties = allProperties.data.filter(property=>property.location === area);
        }
             
  

    const handleDropdownBtnClick = (e) =>{
        setIsActive(!isActive);
    }

  

  return (
    
    <Lekkiph1Dropdown>
        
        
        <DropdownBtn onClick={handleDropdownBtnClick}>
            <div><p>{location}</p></div>
            <div>
                {filteredProperties? <i>{filteredProperties.length} Properties</i> :
                <i>0 Properties</i>}
                {/* <img src="../../../Assets/Polygon 2.svg" alt="dropArrow"/> */}
            </div>
        </DropdownBtn>
        
        {isActive && ( 

            filteredProperties.length === 0? <p>No properties available at the moment</p> : 

            
            filteredProperties.map((item)=>(
                <DropdownContent>
                    <Propertycard item={item}/>
                </DropdownContent>
            ))
        

            
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