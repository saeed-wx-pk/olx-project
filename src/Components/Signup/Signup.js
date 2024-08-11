import React, { useState  } from 'react';
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {addDoc,collection} from 'firebase/firestore'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useNavigate} from 'react-router-dom'



export default function Signup() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const submitHandle = async(e)=>{
    e.preventDefault()
    
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      
        const user = userCredential.user;
        
        updateProfile(user, {
          displayName: username
          
          }).then(() => {
            
            
            
            addDoc(collection(db, "users"), {
              id:user.uid,
              username:username,
              phone:phone
            }).then(()=>{
              navigate('/login');
            })
          }).catch((error) => {
            console.log(error);
          });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage+'  heeeeeeee  '+errorCode);
      // ..
    });
    
  }
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='hello'></img>
        <form onSubmit={submitHandle}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            name="name"
            required
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            required 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=> navigate('/login')}>Login</a> 
      </div>
    </div>
  );
}

//"Google Sans", sans-serif
//photoURL: "https://example.com/jane-q-user/profile.jpg"