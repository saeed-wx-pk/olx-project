import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext ,firebaseContext} from '../../store/contexts';
import {  getAuth, signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom';




function Header() {
  const {user} = useContext(AuthContext)
 
  const navigate = useNavigate()
  const auth = getAuth();
  function logout(){
    signOut(auth).then(() => {
      alert('Sign-out successful.')
      navigate('/login')

    }).catch((error) => {
      alert('An error happened.')
      
    });
    
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{  user ? user.displayName : <a href="/login">Login</a> }</span>
          <hr />
        </div>
        { user &&
            
          <div className="loginPage">
            <span> <a className='logout' onClick={logout}>Logout</a> </span>
            <hr />
          </div>
           
}
        
        <div className="sellMenu">
          <div onClick={()=> navigate('/create')}><SellButton></SellButton>
          
          <div  className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
