import React from 'react'
import styled from 'styled-components';
import Lekkiphase1 from './Properties/Lekkiphase1';
import locationList  from './Properties/Lekkiphase1';



function Child2({allProperties}) {

  console.log(allProperties)

  return (
    <Houses>
        <Lekkiphase1 location="Oniru" allProperties={allProperties} />
        <Lekkiphase1 location="Lekki Phase 1" allProperties={allProperties}/>
        <Lekkiphase1 location="Lekki Phase 1 (Right)" allProperties={allProperties} />
        <Lekkiphase1 location="Ikate" allProperties={allProperties} />
        <Lekkiphase1 location="Salem" allProperties={allProperties} /> 
        <Lekkiphase1 location="Ilasan" allProperties={allProperties} />
        <Lekkiphase1 location="Jakande" allProperties={allProperties} />
        <Lekkiphase1 location="Osapa" allProperties={allProperties} />
        <Lekkiphase1 location="Agungi" allProperties={allProperties} />
        <Lekkiphase1 location="Ologolo" allProperties={allProperties} />
        <Lekkiphase1 location="Igboefon" allProperties={allProperties} />
        <Lekkiphase1 location="Idado" allProperties={allProperties} />
        <Lekkiphase1 location="New Road" allProperties={allProperties} />
        <Lekkiphase1 location="Chevron" allProperties={allProperties} />
        <Lekkiphase1 location="Conservation Road" allProperties={allProperties} />
        <Lekkiphase1 location="Orchid" allProperties={allProperties} />
        <Lekkiphase1 location="Ikota" allProperties={allProperties} />
        <Lekkiphase1 location="VGC" allProperties={allProperties} />
        <Lekkiphase1 location="Ajah" allProperties={allProperties} />
        <Lekkiphase1 location="Awoyaya" allProperties={allProperties} />

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