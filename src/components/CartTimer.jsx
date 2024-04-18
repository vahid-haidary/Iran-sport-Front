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
    <section className=' bg-white font-Dana my-[72px] rounded-2xl ' >

        <div className='grid grid-cols-4 gap-6 p-[19px] ' >

        <div className='flex flex-col justify-center pr-12' >
            <h1  className='font-DanaDemiBold text-[22px] mb-2'>فروش ویژه</h1>
            <span  className=' max-w-[167px] text-blackText-100'>
            بهترین های بهار اسپورت کالا با قیمت های بی نظیر
            </span>
            <div className='flex gap-4 mt-[34px] font-DanaMedium text-xl child:w-[47px] child:h-[47px]'>
                <div className='text-center'>
                <span className='timer-style' >{second}</span>
                <span className='text-sm text-grayText-300' >ثانیه</span>
                </div>

                <div className='text-center'>
                <span className='timer-style' >{minute}</span>
                <span className='text-sm text-grayText-300' >دقیقه</span>
                </div>

                <div className='text-center'>
                <span className='timer-style' >{hour}</span>
                <span className='text-sm text-grayText-300' >ساعت</span>
                </div>

                <div className='text-center'>
                <span className='timer-style' >2</span>
                <span className='text-sm text-grayText-300' >روز</span>
                </div>

            </div>
        </div>

        {ProductsArray.slice(0,3 ).map((product)=>{
            return(
              <div key={product.pId} className='flex flex-col items-center bg-white rounded-lg shadow-2'>
                <Link to={`/product/${product.pId}`}>
              <img  className='w-[195px] h-[195px] mt-[13px]' src={product.pImgs} alt={product.pName} />
                </Link>
              <h3 className='max-w-[250px] text-center  mt-4 font-DanaDemiBold text-blackText-200 text-base' >{product.pName}</h3>
              <div className='flex flex-col items-center child:mt-2 ' >
                <span className='font-DanaDemiBold text-xl text-brand ' >{product.pPrice}</span>
                <span className='font-Dana text-grayText-150 line-through' >{product.pDiscount}</span>
                <span className='max-w-[187px] max-h-[33px] whitespace-wrap overflow-hidden text-center leadin-[18px] text-grayText-300 font-Dana text-xs mb-4' >
                  {product.pName}
                </span>
                <button className='flex justify-center items-center gap-2 w-[77px] mb-[18px] py-2 px-3 font-Dana text-xs bg-brand rounded'>

                  <span>
                    <svg className='w-3 h-3' ><use href='#plus' ></use></svg>
                  </span>
                  <span>
                  افزودن 
                  </span>

                </button>

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