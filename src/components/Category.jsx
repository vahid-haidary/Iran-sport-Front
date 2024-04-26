import React from 'react'

function Category() {
  return (
    <>
    <section className='max-xs:px-4' >

        <div className='max-xs:hidden flex justify-center items-center before:w-full  before:h-[0.8px] before:bg-grayText-50  after:w-full after:h-[0.8px]  after:bg-grayText-50 ' >
            <span className=' flex items-center ' >
                <h3 className='w-max px-4 font-DanaDemiBold text-lg text-blackText-200 ' >محصولات ایران اسپرت</h3>
            </span>
        </div>

        <div className='flex justify-center xs:gap-6 gap-4 font-DanaDemiBold mt-6 xs:mt-8 text-blackText-200 xs:text-lg text-xxs+ category-btn-css ' >

            <span className='bg-white rounded-full'> 
                <svg className='w-[45px] h-[45px] max-xs:hidden' ><use href='#pants' ></use></svg>
                <svg className='w-[24px] h-[24px] xs:hidden' ><use href='#pants-res' ></use></svg>
                <h4>ست ورزشی</h4>
            </span>

            <span  className='bg-white rounded-full'>
                <svg className='w-[45px] h-[45px] max-xs:hidden'><use href='#sneaker' ></use></svg>
                <svg className='w-[24px] h-[24px] xs:hidden'><use href='#sneaker-res' ></use></svg>
                <h4>کفش ورزشی</h4>
            </span>

            <span className='bg-white rounded-full'> 
                <svg className='w-[45px] h-[45px] max-xs:hidden'><use href='#soccerball' ></use></svg>
                <svg className='w-[24px] h-[24px] xs:hidden'><use href='#soccerball-res' ></use></svg>
                <h4>فوتبال</h4>
            </span>

            <span  className='bg-white rounded-full'>
                <svg className='w-[45px] h-[45px] max-xs:hidden'><use href='#sneakermove' ></use></svg>
                <svg className='w-[24px] h-[24px] xs:hidden'><use href='#sneakermove-res' ></use></svg>
                <h4>دوومیدانی</h4>
            </span >

            <span className='bg-white rounded-full max-xs:hidden'>
                <svg className='w-[45px] h-[45px]'><use href='#hoodie' ></use></svg>
                <h4>کوهنوردی</h4>
            </span>

            <span  className='bg-white rounded-full max-xs:hidden'>
                <svg className='w-[45px] h-[45px]'><use href='#barbell' ></use></svg>
                <h4>لوازم جانبی</h4>
            </span>

        </div>

    </section>
    </>
  )
}

export default Category