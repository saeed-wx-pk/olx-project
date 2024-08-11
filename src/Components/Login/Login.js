import React, { useState   } from 'react';
import {  signInWithEmailAndPassword } from "firebase/auth";
import Logo from '../../olx-logo.png';
import './Login.css';
import { getAuth } from "firebase/auth";
import { useNavigate} from 'react-router-dom'

function Login() {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const auth = getAuth();
  const submitHandle = (e)=>{
    e.preventDefault()
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
        alert("Logged In Successfully")
        
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandle}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=> navigate('/signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
