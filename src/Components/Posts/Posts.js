import React,{useContext, useEffect,useState} from 'react';
import { getFirestore , collection , getDocs } from "firebase/firestore";
import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../store/postContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const db = getFirestore();
  const {setPostDetails} = useContext(PostContext)
  const navigate = useNavigate()
  useEffect(() => {
     
      const colRef = collection(db, 'products');
      setLoading(true);
       getDocs(colRef)
      .then((snapshot) => {
        let productData = snapshot.docs.map((product) =>{
           return {
            ...product.data(),
           id:product.id
           }
          });
          
        setProducts(productData)
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
     
     
    
  }, [])
  
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>


        <div className="cards">
        {
          products.map((product)=>(
            <div className="card" onClick={()=>{
              setPostDetails(product)
              navigate('/view')
            }}>
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
          ))
        }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {
            products.map((product)=>{
                <div className="card"  onClick={()=>{
                    setPostDetails(product)
                    navigate('/view')
                  }}>
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
            })
          }
          
        </div>
      </div>
    </div>
  );
}

export default Posts;


