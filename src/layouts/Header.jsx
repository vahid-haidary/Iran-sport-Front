import React from 'react'

function Header() {
  return (
    <>
    <nav className='flex justify-between bg-white mx-[60px] px-4 pb-5 rounded-lg shadow-1' >

      <div className='flex justify-between text-center items-center w-1/2 mt-4 child:font-Dana child:cursor-pointer child-hover:scale-105' >

        {/* Logo & sort navbar */}
        <span>
          <img src="../../public/images/Logo Shapes 23.png" alt="Logo" />
        </span>

          <span className='flex gap-x-2 pl-3' >
          <svg className='w-21 h-21 ' ><use href='#category' ></use></svg>
            <a className='px-[5.5px]' >دسته بندی</a>
            <svg className='w-21 h-21' ><use href='#vector' ></use></svg>
          </span>

          <span className='flex gap-x-2' >
            <svg className='w-21 h-21' ><use href='#message-question' ></use></svg>
            <a>سوالات متداول</a>
          </span>

          <span className='flex gap-x-2' >
            <svg className='w-21 h-21' ><use href='#tick-square' ></use></svg>
            <a>درباره ی ما</a>
          </span>

          <span className='flex gap-x-2' >
            <svg className='w-21 h-21' ><use href='#call' ></use></svg>
            <a>تماس با ما</a>
          </span>

      </div>

      {/* Login & Search */}
      <div className='flex items-center gap-x-2 mt-[15px] child:cursor-pointer child-hover:scale-105' >
        <span>
        <svg className='w-[26px] h-[26px]' ><use href='#search' ></use></svg>
        </span>
        <span>
        <svg className='w-[26px] h-[27px]' ><use href='#cart' ></use></svg>
        </span>
        <span>
        <svg className='w-[41px] h-[42px]' ><use href='#profile' ></use></svg>
        </span>
      </div>

    </nav>
    </>
  )
}

export default Header