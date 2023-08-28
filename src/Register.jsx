import { useState } from 'react'
import './App.css'
import registerDb from './register'
import Popup from './Popup'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')
  const [confimedPassword, setConfirmedPassword] = useState('')

  const emailChange = (event) => {
    setEmail(event.target.value)
  }

  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  const nameChange = (event) => {
    setName(event.target.value)
  }

  const confPasswordChange = (event) => {
    setConfirmedPassword(event.target.value)
  }

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
    <div className='loginBox'>
    <h1>Register page</h1>
    <br/>
    <form >
       Name:<input type='text' className='name' onChange={nameChange} ></input>
       <br/>
       Email:<input type='email' className='email' onChange={emailChange} ></input>
       <br/>
       Password:<input type='password' className='password' onChange={passwordChange}  ></input>
       <br/>
       Confirm Password:<input type='password' className='confimedPassword' onChange={confPasswordChange}  ></input >
    </form>
    <br/>  
       <button type='submit' onClick={registerDb}>Sign-up</button>
       <button> <a href="./">Already have an account?</a></button>
    </div>
    <Popup/>
    </>
  )
}

export default Register
