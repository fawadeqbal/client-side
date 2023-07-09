import React, { useState } from 'react'
import AddProduct from './components/AddProduct'
import ManageProducts from './components/ManageProducts'


const Seller = () => {
    const [currentPage,setCurrentPage]=useState('view')


    const render=()=>{
        if(currentPage==='view'){
            return(
                <>
                <ManageProducts/>
                </>)
        }else if(currentPage==='add'){
            return(<>
                <AddProduct/>
                </>)
        }

        return(<h1>Hi</h1>)
    }
  return (
    <div>
    <nav className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white font-bold text-xl">Seller Dashboard</h1>
          </div>
          <div className="flex">
            <button
              name='home'
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </button>
            <button
            name='view'
                onClick={(e)=> setCurrentPage(e.currentTarget.name)}
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              view Products
            </button>
            <button
            name='add'
            onClick={(e)=> setCurrentPage(e.currentTarget.name)}
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Add Product
            </button>
            <button
              href="#"
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Orders
            </button>
            <button
              href="#"
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Profile
            </button>
            <button
              href="#"
              className="text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
<div>{render()}</div>

    </div>
  )
}

export default Seller