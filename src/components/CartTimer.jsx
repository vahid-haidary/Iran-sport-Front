import React, { useEffect, useState } from 'react'
import ProductsArray from '../constants/ProductsArray'
import { Link } from 'react-router-dom'

function CartTimer() {
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(59);
    const [hour,setHour] = useState(24)
  

    useEffect(() => {
        const timer = setInterval(() => {
            setSecond(second - 1)
            if(second === 0){
                setSecond(59)
                setMinute(minute-1)
            }
            if(minute === 0 && second === 0){
                setHour(hour - 1)
                setMinute(59)
                return
            }
        }, 1000);
    
        return () => clearInterval(timer);
      },);

  return (
    <>
    <section className=' bg-white font-Dana my-8 xs:my-[72px] xs:rounded-2xl ' >

          {/* Cart Timer Wrapper */}
      <div className='grid grid-cols-2 xs:grid-cols-4 max-xs:max-h-[237px] overflow-hidden gap-4 xs:gap-6 py-8 px-4 xs:p-[19px] ' >

        {/* Right Section */}
        <div className='flex flex-col justify-start xs:justify-center xs:pr-12' >

            {/* Title Right */}
            <h1  className='font-DanaDemiBold text-sm xs:text-[22px] mb-2'>فروش ویژه</h1>
            <span  className=' max-w-[167px] text-blackText-100 max-xs:text-xs'>
            بهترین های بهار اسپورت کالا با قیمت های بی نظیر
            </span>
            {/* Timer */}
            <div className='flex gap-2 xs:gap-4 mt-2 xs:mt-[34px] font-DanaMedium text-xs xs:text-xl child:w-[47px] child:h-[47px]'>
              {/* Second */}
              <div className='text-center'>
                <span className='timer-style' >{second}</span>
                <span className='text-xs xs:text-sm text-grayText-300' >ثانیه</span>
              </div>
              {/* Minute */}
              <div className='text-center'>
                <span className='timer-style' >{minute}</span>
                <span className='text-xs xs:text-sm text-grayText-300' >دقیقه</span>
              </div>
              {/* Hour */}
              <div className='text-center'>
                <span className='timer-style' >{hour}</span>
                <span className='text-xs xs:text-sm text-grayText-300' >ساعت</span>
              </div>
              {/* Day */}
              <div className='text-center'>
                <span className='timer-style' >2</span>
                <span className='text-xs xs:text-sm text-grayText-300' >روز</span>
              </div>

            </div>
        </div>

        {/* Product carts */}
        {ProductsArray.slice(0,3 ).map((product)=>{
            return(
              <div key={product.pId} className='flex flex-col items-center bg-white max-xs:px-2 rounded-lg shadow-2'>
              <Link to={`/product/${product.pId}`}>
                <img  className='w-[70px] xs:w-[195px] h-[70px] xs:h-[195px] mt-[13px]' src={product.pImgs} alt={product.pName} />
              </Link>
              <h3 className='xs:max-w-[250px] text-center  mt-4 font-DanaDemiBold text-blackText-200 text-xxs+ xs:text-base' >{product.pName}</h3>
              <div className='flex flex-col items-center child:mt-2 ' >
                <span className='max-xs:hidden font-DanaDemiBold text-xxs+ xs:text-xl text-blackText-200 xs:text-brand ' >{product.pPrice}</span>
                <span className='max-xs:hidden font-Dana text-grayText-150 line-through' >{product.pDiscount}</span>

                <div className=' max-xs:w-full max-xs:flex max-xs:gap-3'>
                <span className='max-xs:hidden max-w-[187px] max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xs ' >
                  {product.pName}
                </span>
                <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                  {product.pCategory}
                </span>
                <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                  {product.pCategory}
                </span>
                </div>

                <div className='max-xs:w-full max-xs:gap-10 max-xs:flex max-xs:items-center max-xs:justify-between max-xs:mb-2'>
                  
                  <div className='xs:hidden flex items-center gap-1' >
                  <span className='xs:hidden font-DanaDemiBold text-xxs+ xs:text-xl text-blackText-200 xs:text-brand ' >{product.pPrice}</span>
                  <span className='xs:hidden font-DanaDemiBold text-xxs+  text-blackText-200 ' >تومان</span>
                  </div>

                <button className='flex justify-center items-center gap-2 xs:w-[77px] xs:mb-[18px] xs:mt-4 xs:py-2 xs:px-3 p-2 font-Dana text-xs bg-brand rounded-full xs:rounded'>
                  <span >
                    <svg className='w-3 h-3 ' ><use href='#plus' ></use></svg>
                  </span>
                  <span className='max-xs:hidden'>
                    افزودن 
                  </span>
                </button>

                </div>
              </div>
            </div>
            )
          })}
         
      </div>

    </section>
    </>
  )
}

export default CartTimer