import React, { useEffect, useState } from 'react'
import { ApiCategories } from '../../api/ApiCatagory'
import { fetchFilteredProducts } from '../../api/product'
import Catagory from './Catagory'
import Products from '../Product/Products'
const Catagories = () => {
  const [catagory,setCatagory]=useState(`men's clothing`);
  const [products,setProducts]=useState([])
  useEffect(()=> async()=>{
    const data=await fetchFilteredProducts(catagory)
    setProducts(data)
  })
  return (
    <div>
    <div className='flex justify-center items-center pl-9 pr-[38px] pb-7 mt-5 mb-5'>
        {
            ApiCategories.map((catagory,index)=>(
                <Catagory item={catagory} key={index} setCatagory={setCatagory}/>
            ))
        }
    </div>
    {!catagory?null:<Products category={catagory} products={products}/>}
    
    </div>

  )
}

export default Catagories