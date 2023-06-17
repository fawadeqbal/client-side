
import React, { useState } from 'react';
import Product from './Product'


const Products = ({ category,products }) => {
  


  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  

  const titleStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    textAlign: 'center',
    transition: 'color 0.3s ease-in-out',
  };

  return (
    <div className='animation duration-400'>
      <h2
        className="border-[0.1px] border-[#8a4af3] mt-5 text-2xl font-normal mb-4 m-4 p-5 rounded-xl text-[#8a4af3] "
        style={titleStyle}
      >
        {capitalizedCategory}
      </h2>
      <div className="flex flex-wrap p-5 justify-evenly items-center m-3"  id="products">
        {products.map((item, key) => (
          <>
          <Product item={item} key={key} />
          <hr/>
          </>

        ))}
      </div>
    </div>
  );
};

export default Products;
