import React, { useContext, useEffect, useState } from 'react';
import './View.css';
import { PostContext } from '../../store/postContext';
import {  collection, getDocs, getFirestore , query, where } from 'firebase/firestore';


function View() {
  const [userDetails, setUserDetails] = useState(null)
  const [loading, setLoading] = useState(true);
  const {postDetails} = useContext(PostContext)
  const db = getFirestore();

  useEffect(() => {
    const {userId} = postDetails;
    
    
    const q = query(
      collection(db, "users"),
      where('id', '==', userId)
      
    );
    
      setLoading(true)
       getDocs(q)
      .then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
          const userData = doc.data(); 
          
          setUserDetails(userData);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false)
      });
  }, [])
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt="post image"
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name} </span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
