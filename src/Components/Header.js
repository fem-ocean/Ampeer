import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth, googleProvider, signInWithPopup } from "../firebase";

function Header(props) {

  const [username, setUsername] = useState(null)
  const [displaypic, setDisplaypic] = useState(null)
  
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        console.log(response.user);
        console.log(response.user.displayName);
        setUsername(response.user.displayName);
        setDisplaypic(response.user.photoURL)

      })
      .catch((err) => {
        alert(err.message);
      });
      // console.log(user.photoURL)

  };

    


  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <img src="../../Assets/AmpeerLogo.svg" alt="brand-logo" />
        </Link>
      </LogoContainer>
      <div>
        {username && displaypic ?(
          <p>Welcome {username}</p>
        ):(<>
            <Join>Sign up</Join>
            <SignIn onClick={handleSignIn}>Sign In</SignIn>
            </>
        )}
        
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 120px;
  width: 100vw;
  position: relative;
  border: 12px solid green;
  /* top: 0px; */
  /* left: 0px; */
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.03);
  box-shadow: 0px 2px 13px 1px rgba(0, 0, 0, 0.25);
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: space-around;
  /* flex-wrap: nowrap; */

  @media (max-width: 768px) {
    height: 90px;
  }

  div {
    margin: auto;
    /* border: 1px solid red; */
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  text-decoration: none;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
  @media (max-width: 768px) {
    /* font-size: 14px; */
    padding: 5px 10px;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px rgba(44, 142, 113, 1);
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  color: rgba(44, 142, 113, 1);
  line-height: 20px;
  padding: 10px 24px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    text-decoration: none;
    color: rgba(44, 142, 113, 1);
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const LogoContainer = styled.div`
  width: 60%;
  height: 80%;
  position: relative;
  /* left: 81px; */
  /* top: 30px; */
  /* border: 3px solid black; */
  margin: auto;
  margin-top: 15px;

  @media (max-width: 768px) {
    img {
      width: 150px;
    }
  }
`;

export default Header;
