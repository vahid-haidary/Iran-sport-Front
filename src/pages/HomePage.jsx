import React from 'react'
import Slider from '../components/Slider'
import Category from '../components/Category'
import Products from '../components/Products'

function HomePage() {
  return (
    <>
    <div className='px-[60px] h-[10000px]' >
      <Slider/>
      <Category/>
      <Products/>

    </div>

    </>
  )
}

export default HomePage