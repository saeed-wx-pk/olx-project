
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import Category from './Pages/category';

import { useContext, useEffect } from 'react';
import { AuthContext } from './store/contexts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Post from './store/postContext'


function App() {
  const {user, setUser} = useContext(AuthContext)
  
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {

      }
    });

  })
  return (
    <div className="App">
      <Post>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/view' element={<View/>}/>
            <Route path='/category' element={<Category/>}/>
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
