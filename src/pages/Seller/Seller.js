import React, { useContext, useState } from 'react'
import AddProduct from './components/AddProduct'
import ManageProducts from './components/ManageProducts'
import { StoreContext } from '../../context/StoreContext'


const Seller = () => {
  const {currentUser}=useContext(StoreContext)
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
    if(currentUser.role==='seller'){
      return (
        <div>
        <nav className="bg-[#8a4af3]">
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
    }else{
      return(<>
      You do not have permission
      </>)
    }
  
}

export default Seller