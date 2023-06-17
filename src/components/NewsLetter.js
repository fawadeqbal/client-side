import { Send } from '@material-ui/icons'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-gray-300'>
        <h1 className='text-[50px] font-bold'>
            NEWSLETTER
        </h1>
        <h2 className='text-[20px] mt-2'>
            Always touch with us,for your favorite products
        </h2>
        <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#ccc] rounded-[5px] overflow-hidden'>
            <input
            type='email'
            placeholder='email'
            className='border-none pl-[20px] flex-[7] outline-none'
            />
            <button className='btn z-50'>
                <Send/>
            </button>
        </div>
    </div>
  )
}

export default NewsLetter