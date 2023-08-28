import { useState } from 'react'
import './App.css'
import loginDB from './login'
import Popup from './Popup'
import { Link } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')

  const emailChange = (event) => {
    setEmail(event.target.value)
  }

  const passwordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
    <Link to="/login"></Link>
    <div className='loginBox'>
    <h1>Login page</h1>
    <br/>
    <form >
       Email:<input type='email' className='email' onChange={emailChange} ></input>
       <br></br>
       Password:<input type='password' className='password' onChange={passwordChange}  ></input>
    </form>
    <br></br>  
       <button type='submit' onClick={loginDB}>Sign-in</button> <button> <a href="./register">Don't have an account?</a></button>
    </div>
    <Popup/>
    </>
  )
}

export default App
