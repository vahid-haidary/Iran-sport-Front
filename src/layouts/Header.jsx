import React from 'react'
import { Link } from 'react-router-dom'
import { cartItems } from '../components/ProductDetailDesignTop'

function Header() {
  return (
    <>
    <nav className='max-xs:hidden flex justify-between bg-white xs:mx-[60px] px-4 pb-5 rounded-lg shadow-1' >

      {/* Sort Wrapper */}
      <div className='flex justify-between text-center items-center w-1/2 mt-4 child:font-Dana child:cursor-pointer child-hover:scale-105' >

        {/* Logo & sort navbar */}
        <Link to={"/"}>
          <img src="/images/Logo Shapes 23.png" alt="Logo" />
        </Link>

          {/* Sorts */}
          <span className='flex gap-x-2 pl-3' >
          <svg className='w-21 h-21 ' ><use href='#category' ></use></svg>
            <a className='px-[5.5px]' >دسته بندی</a>
            <svg className='w-21 h-21' ><use href='#vector' ></use></svg>
          </span>

          {/* Questions */}
          <span className='flex gap-x-2' >
            <svg className='w-21 h-21' ><use href='#message-question' ></use></svg>
            <a>سوالات متداول</a>
          </span>

          {/* About us */}
          <span className='flex gap-x-2' >
            <svg className='w-21 h-21' ><use href='#tick-square' ></use></svg>
            <a>درباره ی ما</a>
          </span>

          {/* Contact */}
          <span className='flex gap-x-2' >
            <svg className='w-21 h-21' ><use href='#call' ></use></svg>
            <a>تماس با ما</a>
          </span>

      </div>

      {/* Login & Search Wrapper */}
      <div className='flex items-center gap-x-2 mt-[15px] child:cursor-pointer ' >

        {/* Search */}
        <span>
        <svg className='w-[26px] h-[26px]' ><use href='#search' ></use></svg>
        </span>
        {/* Basket */}
        <Link to={"/basket"}>
          <span>
          <svg className='w-[26px] h-[27px]' ><use href='#cart' ></use></svg>
          </span>
          {cartItems.length !== 0 ? <div className='absolute left-[130px] bg-red-600 p-1 rounded-full font-DanaDemiBold text-xs'>{cartItems.length}</div> : null}

        </Link>
        {/* Profile */}
        <span>
          <Link to="/login" >
        <svg className='w-[41px] h-[42px]' ><use href='#profile' ></use></svg>
          </Link>
        </span>

      </div>

    </nav>

    {/* Response */}
    <section className='xs:hidden bg-white' >

      <div className='flex justify-between px-8 py-[15px] shadow-4' >
        {/* Menu Bar */}
          <svg className='w-6 h-6' ><use href='#menu' ></use></svg>

          {/* Logo */}
        <Link to={"/"}>
        <img className='w-[37px] h-[25px]' src="/images/Logo Shapes 23.png" alt="Logo" />
        </Link>
      </div>

    </section>
    
    </>
  )
}

export default Header