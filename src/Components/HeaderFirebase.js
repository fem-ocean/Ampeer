//THIS HEADER IS TO BE USED FOR FIREBASE.

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
// import { auth} from "../firebase";
import { db, provider } from "../firebase";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { signIn, signOutRedux } from "../Redux/userAction";
import { doc, setDoc } from "firebase/firestore";

const clientId =
  "98761361459-de6kvpo6kjt8fph6kc3hosuh5pre3etk.apps.googleusercontent.com";

function HeaderFirebase(props) {
  const [username, setUsername] = useState(null);
  const [displaypic, setDisplaypic] = useState(null);

  const auth = getAuth();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        //To get access Token to use to access Google API
        const credential = GoogleAuthProvider.credentialFromResult(response);
        const token = credential.accessToken;
        return response.user
      })
      .then(async (user)=>{
        //User info
        console.log(user);
        console.log(user.displayName);
        //Change state variables
        await setDoc(doc(db,'Users',user.uid),{email: user.email, isPaid: false})
        setUsername(user.displayName);
        setDisplaypic(user.photoURL);
        //Let the App know User has signed in in redux store
        props.signIn()
        console.log(db.collection('users'))
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //   const onSuccess = async (res) => {
  //     console.log("[Login Success] currentUser:", res.profileObj);
  //     console.log(res.profileObj.name);
  //     setUsername(res.profileObj.name);

  //for id token
  // var id_token = res.getAuthResponse().id_token;

  //show id token in console for debugging
  // console.log(id_token);

  //Firebase
  // const credential = GoogleAuthProvider.credential(id_token) //Build Firebase credential with the Google Id Token
  // console.log(credential)
  // signInWithCredential(auth, credential)

  //dispatch action to the redux state and set loggedIn to True
  // props.signIn();

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
  //   };

  //   const onFailure = (res) => {
  //     console.log("[Login Failed]");
  //   };

  const logOutSuccess = () => {
    signOut(auth)
      .then(() => {
        setUsername(null);
        props.signOutRedux()
        alert("You have Successfully Signed Out");
      })
      .catch((err) => {
        alert("Something went wrong");
      });

    // var auth2 = gapi.auth2.getAuthInstance();
    // auth2
    //   .signOut()

    //   .then(() => {
    //     setUsername(null);
    //     props.signOutRedux();  //for redux to set signIn to false

    //     alert("You have successfully Logged out");
    //   });
  };

  //   useEffect(() => {
  //     function start() {
  //       gapi.auth2.init({
  //         clientId: clientId,
  //         scope: "",
  //       });
  //     }

  //     gapi.load("auth2", start);
  //   }, [username]);

  // var accessToken = gapi.auth.getToken().access_token;  //foraccess token

  console.log(props.loggedIn);

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Link to="/">
            <img src="../../Assets/AmpeerLogo.svg" alt="brand-logo" />
          </Link>
        </LogoContainer>

        {!username ? (
          <button onClick={handleSignIn}>Sign In</button>
        ) : (
          //   <GoogleLogin
          //     clientId={clientId}
          //     buttonText="Login"
          //     onSuccess={handleSignIn}
          //     onFailure={onFailure}
          //     cookiePolicy={"single_host_origin"}
          //     isSignedIn={true}
          //     className="googlelogin"
          //   />
          <>
            <SignOut>
              <p>
                <strong>Welcome</strong> {username}
              </p>
              <DropDown>
                <span onClick={logOutSuccess}>Sign Out</span>
              </DropDown>
            </SignOut>
          </>
        )}
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn()),
    signOutRedux: () => dispatch(signOutRedux()),
  };
};

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
  @media (max-width: 768px) {
    margin: auto;
  }
`;

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
`;

const SignOut = styled.div`
  margin: auto;
  /* border: 1px solid red; */
  display: flex;
  position: relative;

  p {
    text-align: left;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:hover {
    ${DropDown} {
      opacity: 0.8;
      transition-duration: 0.3s;
      cursor: pointer;
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderFirebase);
