import React, { useState } from 'react'
import styled from 'styled-components';

function AdminLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

 const handleEmailInput = (e) =>{
    setEmail(e.target.value)
  }

  const handlePasswordInput = (e) =>{
    setPassword(e.target.value)
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
  }

  const form = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'spaceBetween',
    justifyContent: 'spaceEvenly',
  }

  return (
    <div>
        <FormHolder>
          <p>Sign in to your account</p>

          <Form>
          
            <form onSubmit={handleFormSubmit} style={form}>
              
              <label>email:</label>
              <input type="text" name="email" placeholder="Enter your email" value={email} onChange={handleEmailInput}/>

              <label styles={{marginTop:'20px'}}>password:</label>
              <input type="password" name="password" placeholder="password" value={password} onChange={handlePasswordInput} styles />

              <input type="submit" value="submit" styles={{marginTop:"20px"}}/>
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