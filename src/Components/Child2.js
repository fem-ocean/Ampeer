import React from 'react'
import styled from 'styled-components';
import Lekkiphase1 from './Properties/Lekkiphase1';


function Child2(props) {
  return (
    <Houses>
        <Lekkiphase1 location="ONIRU"/>
        <Lekkiphase1 location="LEKKI PHASE 1"/>
        <Lekkiphase1 location="LEKKI RIGHT"/>
        <Lekkiphase1 location="IKATE"/>
        <Lekkiphase1 location="SALEM"/>
        <Lekkiphase1 location="ILASAN"/>
        <Lekkiphase1 location="IKATE"/>
        <Lekkiphase1 location="JAKANDE"/>
        <Lekkiphase1 location="OSAPA"/>
        <Lekkiphase1 location="AGUNGI"/>
        <Lekkiphase1 location="OLOGOLO"/>
        <Lekkiphase1 location="IGBOEFON"/>
        <Lekkiphase1 location="IDADO"/>
        <Lekkiphase1 location="NEW ROAD"/>
        <Lekkiphase1 location="CHEVRON"/>
        <Lekkiphase1 location="CONSERVATION ROAD"/>
        <Lekkiphase1 location="ORCHID ROAD"/>
        <Lekkiphase1 location="IKOTA"/>
        <Lekkiphase1 location="VGC"/>

    </Houses>
  )
}

const Houses = styled.div`
    width: 1000px;
    /* height: 1400px; */
    height: max-content;
    /* border: 1px solid red; */
    margin: auto;
    display: flex;
    flex-direction: column;
    position: relative;

`

export default Child2;