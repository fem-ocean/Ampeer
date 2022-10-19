import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { auth, googleProvider, signInWithPopup } from "../firebase";
import { GoogleLogin, GoogleLogout} from 'react-google-login';
import { gapi } from 'gapi-script'
import { signIn, signOut } from "../Redux/userAction";

const clientId = '98761361459-de6kvpo6kjt8fph6kc3hosuh5pre3etk.apps.googleusercontent.com'

function Header(props) {

  const [username, setUsername] = useState(null)
  const [displaypic, setDisplaypic] = useState(null)
  
  // const handleSignIn = () => {
  //   signInWithPopup(auth, googleProvider)
  //     .then((response) => {
  //       console.log(response.user);
  //       console.log(response.user.displayName);
  //       setUsername(response.user.displayName);
  //       setDisplaypic(response.user.photoURL)

  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  //     // console.log(user.photoURL)

  // };

  
  const onSuccess = async (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    console.log(res.profileObj.name);
    setUsername(res.profileObj.name);
    
    //for id token
    var id_token = res.getAuthResponse().id_token; 
    //show id token in console for debugging
    console.log(id_token);
    //dispatch action to the redux state and set loggedIn to True
    props.signIn()


    //send the google user id token to the server using the POST method.
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '"http://ampeer-001-site1.gtempurl.com/api/Account/ExternalLogin');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function() {
    //   console.log('Signed in as: ' + xhr.responseText);
    // };
    
    // const y = xhr.send('idtoken=' + id_token);
    // console.log('y is '+ y)
    
    // await fetch("http://ampeer-001-site1.gtempurl.com/api/Account/ExternalLogin", {
    //   method: "POST",
    //   headers:""
    // })
  }

  const onFailure = (res) => {
    console.log('[Login Failed]')
  }

  const logOutSuccess = () =>{
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut()
    
    .then(()=>{
      setUsername(null);
      props.signOut()
  
      alert('You have successfully Logged out');
    })

    };



  useEffect(()=>{
    function start(){
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('auth2', start)
  }, [username])

  // var accessToken = gapi.auth.getToken().access_token;  //foraccess token
  

  
  console.log(props.loggedIn)

    


  return (
    <Container>

      <Wrapper>
        <LogoContainer>
          <Link to="/">
            <img src="../../Assets/AmpeerLogo.svg" alt="brand-logo" />
          </Link>
        </LogoContainer>
      
        {!username? 
        <GoogleLogin 
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                  className="googlelogin"
            />    
        :(
        <>   
        <SignOut>
          <p><strong>Welcome</strong> {username}</p>
          <DropDown><span onClick={logOutSuccess}>Sign Out</span></DropDown>
        </SignOut>
        </>
        )}

       </Wrapper>
    </Container>
  );
}

const mapStateToProps = state =>{
  return{
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: ()=>dispatch(signIn()),
    signOut: ()=>dispatch(signOut())
  }
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
  justify-content: center;
  margin: auto;
  /* flex-wrap: nowrap; */

  @media (max-width: 768px) {
    height: 90px;
    
  }

  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 85vw;
  justify-content: space-between;
  @media (max-width: 768px){
    
    margin: auto
  }
`


const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(250, 250, 250);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`

const SignOut = styled.div`
  
  margin: auto;
  /* border: 1px solid red; */
  display: flex;
  position: relative;

  p{
    text-align: left;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:hover{
    ${DropDown}{
      opacity: 0.8;
      transition-duration: 0.3s;
      cursor: pointer;
    }
  }
` 




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
  width: 80%;
  height: 80%;
  position: relative;
  /* left: 81px; */
  /* top: 30px; */
  /* border: 3px solid black; */
  /* margin: auto; */
  margin-top: 15px;

  @media (max-width: 768px) {
    img {
      width: 100px;
    }
  }
`;



export default connect(mapStateToProps, mapDispatchToProps)(Header);
