import React, { useEffect, useState } from 'react'
import ProductsArray from '../constants/ProductsArray'
import { Link } from 'react-router-dom'
import CartDesign from '../constants/CartDesign';

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
              <CartDesign product={product} key={product.pId} />
            )
          })}
         
      </div>

    </section>
    </>
  )
}

export default CartTimer