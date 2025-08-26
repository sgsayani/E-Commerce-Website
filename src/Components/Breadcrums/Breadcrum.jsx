import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';
import all_product from '../Assets/all_product';  // <-- import array

const Breadcrum = ({ productId }) => {
  const product = all_product.find((item) => item.id === productId);
  if (!product) {
    return null;
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> 
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
