import React from 'react'
import Slider from '../components/Slider'
import Category from '../components/Category'
import Products from '../components/Products'
import CartTimer from '../components/CartTimer'
import Boxes from '../components/Boxes'
import Brands from '../components/Brands'
import Blogs from '../components/Blogs'
import Representation from '../components/Representation'

function HomePage() {
  return (
    <>
    <div className='px-[60px]' >
      <Slider/>
      <Category/>
      <Products/>
      <CartTimer/>
      <Boxes/>
      <Brands/>
      <Blogs/>
      <Representation/>

    </div>

    </>
  )
}

export default HomePage