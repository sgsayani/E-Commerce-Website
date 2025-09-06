import React,{useState,useEffect} from 'react'
// import data_product from '../Assets/data'   
import Item from '../Item/Item'                
import './Popular.css'
const Popular = () => {
  const [popular_data_product,setPopularData_product]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/popularcollections")
      .then((response)=> response.json())
      .then((data)=>{setPopularData_product(data)});
  },[])

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {popular_data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
