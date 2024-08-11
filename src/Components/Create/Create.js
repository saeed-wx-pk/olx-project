import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, firebaseContext } from '../../store/contexts'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  
  
  
  const [name, setName] = useState(null)
  const [category, setCategory] = useState(null)
  const [price, setPrice] = useState(null)
  const [image, setImage] = useState(null)

  
  // const {firebase} = useContext(firebaseContext)
 

  const storage = getStorage()
  const db = getFirestore();

  function handleUpload(){
    console.log('chekeee');
    const imageRef = ref(storage, `images/${image.name}`);

    uploadBytes(imageRef, image).then((snapshot) => {
      
      
      return getDownloadURL(imageRef);
    }).then((url)=>{
      addDoc(collection(db, "products"), {
        name,
        category,
        price,
        url,
        userId:user.uid,
        createdAt:new Date().toDateString()
        
      }).then(()=>{
        alert('product successfully added')
        navigate('/');
      })
    }).catch((error) => {
      console.error('Error uploading file:', error);
      alert(error)
    });
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
             className="input" 
             type="number" 
             id="fname" 
             name="Price"
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             required
              />
            <br />
          
          <br />
          <img alt="Please select a image" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          
            <br />
            <input type="file" onChange={(e)=>setImage(e.target.files[0])} required/>
            <br />
            <button type='submit' className="uploadBtn" onClick={handleUpload}>upload and Submit</button>
            
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
