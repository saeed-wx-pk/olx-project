import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
import imgUrl from '../../images/banner copy.png'

function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <a href="/category"><span>Cars</span></a>
            <a href="/category"><span>Motorcy...</span></a>
            <a href="/category"><span>Mobile Ph...</span></a>
            <a href="/category"><span>For Sale:Houses & Apart...</span></a>
            <a href="/category"><span>Scoot...</span></a>
            <a href="/category"><span>Commercial & Other Ve...</span></a>
            <a href="/category"><span>For Rent: House & Apart...</span></a>
            
          </div>
        </div>
        <div className="banner">
          <img
            src={imgUrl}
            alt=""
            
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
