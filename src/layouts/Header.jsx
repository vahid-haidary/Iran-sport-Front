import React from 'react'

function Header() {
  return (
    <>
    <section className='flex justify-between bg-white mx-[60px] rounded-lg px-4 pb-5' >

      <div className='flex justify-between w-1/2 mt-4 text-center items-center ' >

        {/* Logo & sort */}
        <span>
          <img src="../../public/images/Logo Shapes 23.png" alt="Logo" />
        </span>

          <span className=' flex gap-x-2 pl-3' >
          <svg className='w-[21px] h-[21px]' ><use href='#category' ></use></svg>
            <a>دسته بندی</a>
            <svg className='w-[21px] h-[21px]' ><use href='#vector' ></use></svg>
          </span>

          <span className='flex gap-x-2' >
            <svg className='w-[21px] h-[21px]' ><use href='#message-question' ></use></svg>
            <a>سوالات متداول</a>
          </span>

          <span className='flex gap-x-2' >
            <svg className='w-[21px] h-[21px]' ><use href='#tick-square' ></use></svg>
            <a>درباره ی ما</a>
          </span>

          <span className='flex gap-x-2' >
            <svg className='w-[21px] h-[21px]' ><use href='#call' ></use></svg>
            <a>تماس با ما</a>
          </span>

      </div>

      {/* Login & Search */}
      <div></div>

    </section>
    </>
  )
}

export default Header