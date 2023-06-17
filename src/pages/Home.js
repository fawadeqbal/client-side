import React from 'react'
import Slider from '../components/Slider/Slider'
import Catagories from '../components/Catagory/Catagories'
import NewsLetter from '../components/NewsLetter'


const Home = () => {
  return (
    <div className='mt-[73px]'>
        <Slider/>
        <Catagories/>
        <NewsLetter/>
    </div>
  )
}

export default Home