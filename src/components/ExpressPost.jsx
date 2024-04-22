import React from 'react'

function ExpressPost() {
  return (
    <>
         <div className='flex justify-around items-center h-36 px-[60px] bg-white pb-4 font-Dana text-blackText-200 rounded-2xl child:text-center ' >

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
          <svg className='w-[50px] h-[51px]' ><use href='#medal' ></use></svg>
          </span>
          <span>امکان تحویل اکسپرس</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#box' ></use></svg>
          </span>
          <span>امکان تحویل اکسپرس</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#card-pos' ></use></svg>
          </span>
          <span>امکان پرداخت در محل</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#backward-5' ></use></svg>
          </span>
          <span>5 روز ضمانت بازگشت کالا</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[50px] h-[51px]' ><use href='#support' ></use></svg>
          </span>
          <span>پشتیبانی 24 ساعته</span>
        </div>

      </div>
    </>
  )
}

export default ExpressPost