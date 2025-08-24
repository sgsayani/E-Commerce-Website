import React from 'react'
import './Offer.css'
import exclucive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>

      </div>
      <div className="offers_right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
