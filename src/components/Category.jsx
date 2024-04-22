import React from 'react'

function Category() {
  return (
    <>
    <section>

        <div className='flex justify-center items-center before:w-full  before:h-[0.8px] before:bg-grayText-50  after:w-full after:h-[0.8px]  after:bg-grayText-50 ' >
            <span className=' flex items-center ' >
                <h3 className='w-max px-4 font-DanaDemiBold text-lg text-blackText-200 ' >محصولات ایران اسپرت</h3>
            </span>
        </div>

        <div className='flex justify-center gap-6 font-DanaDemiBold mt-8 text-blackText-200 text-lg category-btn-css ' >

            <span className='bg-white rounded-full'> 
                <svg className='w-[45px] h-[45px]' ><use href='#pants' ></use></svg>
                <h4>ست ورزشی</h4>
            </span>

            <span  className='bg-white rounded-full'>
                <svg className='w-[45px] h-[45px]'><use href='#sneaker' ></use></svg>
                <h4>کفش ورزشی</h4>
            </span>

            <span className='bg-white rounded-full'> 
                <svg className='w-[45px] h-[45px]'><use href='#soccerball' ></use></svg>
                <h4>فوتبال</h4>
            </span>

            <span  className='bg-white rounded-full'>
                <svg className='w-[45px] h-[45px]'><use href='#sneakermove' ></use></svg>
                <h4>دوومیدانی</h4>
            </span >

            <span className='bg-white rounded-full'>
                <svg className='w-[45px] h-[45px]'><use href='#hoodie' ></use></svg>
                <h4>کوهنوردی</h4>
            </span>

            <span  className='bg-white rounded-full'>
                <svg className='w-[45px] h-[45px]'><use href='#barbell' ></use></svg>
                <h4>لوازم جانبی</h4>
            </span>

        </div>

    </section>
    </>
  )
}

export default Category