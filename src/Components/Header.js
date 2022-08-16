import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";



function Header(props){
    return(
        <Container>
            <LogoContainer>
                <Link to="/"><img src="../../Assets/AmpeerLogo.svg" alt="brand-logo" /></Link>
            </LogoContainer>
        </Container>
    )
}


const Container = styled.div`
    height: 120px;
    width: 100vw;
    /* position: fixed; */
    /* top: 0px; */
    /* left: 0px; */
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.03);
    box-shadow: 0px 2px 13px 1px rgba(0, 0, 0, 0.25);
    z-index: 100;
    background-color: white;
`

const LogoContainer = styled.div`
    width: 232px;
    height: 72.5px;
    position: absolute;
    left: 81px;
    top: 30px;
    /* border: 3px solid black; */
`


export default Header;