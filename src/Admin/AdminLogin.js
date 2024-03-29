import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

 const handleEmailInput = (e) =>{
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) =>{
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    console.warn(email, password)
    setLoading(true)

    
  }

  const form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'spaceBetween',
    justifyContent: 'spaceEvenly',
  }

  // useEffect(()=>{
  //   fetch('http://ampeer-001-site1.gtempurl.com/api/Account/ExternalLogin', {
  //     method: "POST"
  //   })
  //     .then()
  // },[])

  return (
    <div>
      <Helmet>
          <title>Admin Login</title>
      </Helmet>
        <FormHolder>
          <p>Sign in to your account</p>

          <Form>
          
            <form onSubmit={handleFormSubmit} style={form}>
              
              <label>email:</label>
              <input type="text" name="email" placeholder="Enter your email" value={email} onChange={handleEmailInput}/>

              <label styles={{marginTop:'20px'}}>password:</label>
              <input type="password" name="password" placeholder="password" value={password} onChange={handlePasswordInput}  />

              <input type="submit" value="submit" 
              style={{
                'marginTop':"20px", 
                'backgroundColor': "#2c8e71",
                'border': 'none',
                'color': 'white'}} />
            </form>


          </Form>

        </FormHolder>
    </div>
  )


}

const FormHolder = styled.div`
  width: 300px;
  height: 300px;
  /* border: 1px solid red; */
  margin: auto;
  margin-top: 30px;
  
`

const Form = styled.div`
  width: 80%;
  height: 200px;
  border: 1px solid green;
  margin: auto;
  padding: 40px;

`
export default AdminLogin;