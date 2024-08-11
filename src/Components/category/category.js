import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Heart from '../../assets/Heart';
import './category.css';

import React, { useEffect, useState } from 'react'

function Category() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const db = getFirestore();
    useEffect(() => {
     
        const q = query(
            collection(db, "products"),
            where('category', '==', 'mobile')
            
          );
          
            setLoading(true)
             getDocs(q)
            .then((querySnapshot) => {
              
              querySnapshot.forEach((doc) => {
                const productData = doc.data(); 
                
                setProducts(productData);
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
    <div>
        {
            products.map((product)=>(
                <div className='cards-session'>
            
            <div className="cards">
            <h3>{product.category}</h3>
                <div className="card" >
                    <div className="favorite">
                        <Heart></Heart>
                    </div>
                    <div className="image">
                        <img src={product.url} alt="product image" />
                    </div>
                    <div className="content">
                        <p className="rate">&#x20B9; {product.price}</p>
                        <span className="kilometer">{product.category}</span>
                        <p className="name"> {product.name}</p>
                    </div>
                    <div className="date">
                        <span>{product.createdAt}</span>
                    </div>
                </div>
                
            </div>
        </div>
            ))
        }
    </div>
  )
}

export default Category