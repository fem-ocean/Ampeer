import React from 'react'
import styled from 'styled-components';
import Lekkiphase1 from './Properties/Lekkiphase1';
import locationList  from './Properties/Lekkiphase1';



function Child2({allProperties}) {

  return (
    <Houses>
        <Lekkiphase1 location="ONIRU" locationId={1} allProperties={allProperties} />
        {/* <Lekkiphase1 location="LEKKI PHASE 1" locationId={2} allProperties={allProperties}/>
        <Lekkiphase1 location="LEKKI PHASE 1 RIGHT" locationId={3} allProperties={allProperties} />
        <Lekkiphase1 location="IKATE" locationId={4} allProperties={allProperties} />
        <Lekkiphase1 location="SALEM" locationId={5} allProperties={allProperties} />
        <Lekkiphase1 location="ILASAN" locationId={6} allProperties={allProperties} />
        <Lekkiphase1 location="JAKANDE" locationId={7} allProperties={allProperties} />
        <Lekkiphase1 location="OSAPA" locationId={8} allProperties={allProperties} />
        <Lekkiphase1 location="AGUNGI" locationId={9} allProperties={allProperties} />
        <Lekkiphase1 location="OLOGOLO" locationId={10} allProperties={allProperties} />
        <Lekkiphase1 location="IGBOEFON" locationId={11} allProperties={allProperties} />
        <Lekkiphase1 location="IDADO" locationId={12} allProperties={allProperties} />
        <Lekkiphase1 location="NEW ROAD" locationId={13} allProperties={allProperties} />
        <Lekkiphase1 location="CHEVRON" locationId={14} allProperties={allProperties} />
        <Lekkiphase1 location="CONSERVATION ROAD" locationId={15} allProperties={allProperties} />
        <Lekkiphase1 location="ORCHID ROAD" locationId={16} allProperties={allProperties} />
        <Lekkiphase1 location="IKOTA" locationId={17} allProperties={allProperties} />
        <Lekkiphase1 location="VGC" locationId={18} allProperties={allProperties} />
        <Lekkiphase1 location="AJAH" locationId={19} allProperties={allProperties} />
        <Lekkiphase1 location="AWOYAYA" locationId={20} allProperties={allProperties} /> */}

    </Houses>
  )
}

const Houses = styled.div`
    width: 100%;
    /* height: 1400px; */
    height: max-content;
    /* border: 1px solid red; */
    margin: auto;
    display: flex;
    flex-direction: column;
    /* position: relative; */
    /* position: absolute; */


    @media(max-width: 768px){
      width: 100%
    }

`

export default Child2;