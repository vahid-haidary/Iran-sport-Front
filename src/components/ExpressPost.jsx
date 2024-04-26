import React from 'react'

function ExpressPost() {
  return (
    <>
      {/* Express Section Wrapper */}
      <div className='flex justify-around items-center h-36 px-[60px] bg-white pb-4 font-Dana text-blackText-200 rounded-2xl child:text-center ' >

        {/* Part-1 */}
        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[50px] h-[51px]' ><use href='#medal' ></use></svg>
          </span>
          <span>امکان تحویل اکسپرس</span>
        </div>

        {/* Part-2 */}
        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#box' ></use></svg>
          </span>
          <span>امکان تحویل اکسپرس</span>
        </div>

        {/* Part-3 */}
        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#card-pos' ></use></svg>
          </span>
          <span>امکان پرداخت در محل</span>
        </div>

        {/* Part-4 */}
        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#backward-5' ></use></svg>
          </span>
          <span>5 روز ضمانت بازگشت کالا</span>
        </div>
        
        {/* Part-5 */}
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