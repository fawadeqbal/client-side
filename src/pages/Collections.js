import React, { useState } from 'react'
import Products from '../components/Product/Products'
import { useParams } from 'react-router-dom'

const Collections = () => {
    const {id}=useParams();
    if(parseInt(id)===1){
        return (
            <div>
                <Products category={'electronics'}/>
            </div>
          )
    }else if(parseInt(id)===2){
        return (
            <div>
                <Products category={`men's clothing`}/>
            </div>
          )
    }else if(parseInt(id)===3){
        return (
            <div>
                <Products category={`jewelery`}/>
            </div>
          )
    }
    
  
}

export default Collections