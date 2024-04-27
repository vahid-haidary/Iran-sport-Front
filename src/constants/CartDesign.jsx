import React from 'react'
import { Link } from 'react-router-dom'

function CartDesign({product}) {
  return (
    <>
                  {/* // Cart Wrapper */}
              <div key={product.pId} className='flex flex-col items-center bg-white max-xs:px-2 rounded-lg shadow-2'>

                {/* Product Cover Image */}
                <Link to={`/product/${product.pId}`}>
                  <img  className='w-[70px] xs:w-[195px] h-[70px] xs:h-[195px] mt-[13px]' src={product.pImgs} alt={product.pName} />
                </Link>
                {/* Product Title */}
                <h3 className='xs:max-w-[250px] text-center max-h-[24px] xs:max-h-[48px] overflow-hidden  mt-4 font-DanaDemiBold text-blackText-200 text-xxs+ xs:text-base' >{product.pName}</h3>
                {/* Product Desc */}
                <div className='flex flex-col items-center child:mt-2 ' >
                  {/* Price */}
                  <span className='max-xs:hidden font-DanaDemiBold text-xxs+ xs:text-xl text-blackText-200 xs:text-brand ' >{product.pPrice}</span>
                  <span className='max-xs:hidden font-Dana text-grayText-150 line-through' >{product.pDiscount}</span>

                  {/* Name & Category */}
                <div className=' max-xs:w-full max-xs:flex max-xs:gap-3'>
                  <span className='max-xs:hidden xs:inline-block max-w-[160px] max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xs ' >
                    {product.pName}
                  </span>
                  {/* Response */}
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                </div>

                  {/* Price & Add Product */}
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
    </>
  )
}

export default CartDesign