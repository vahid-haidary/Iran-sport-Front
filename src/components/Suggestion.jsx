import React from 'react'

function Suggestion({product}) {
  return (
    <>
    <section className='bg-white xs:rounded-lg xs:shadow-2 py-4 px-4 xs:px-6' >

        {/* Suggest Title And response  */}
        <div className='max-xs:flex max-xs:items-baseline max-xs:justify-between'>

          <h4 className='max-xs:hidden font-DanaDemiBold text-lg text-blackText-200' >از لیست شما</h4>
          <span className='max-xs:hidden block w-[93px] h-1 bg-brand rounded-xl' ></span>

            {/* Respons */}
            {/* Price */}
          <div className='xs:hidden'>
            <span className='font-DanaDemiBold text-xs text-blackText-100'>
            {product.pPrice}
            </span>
            <span className='font-DanaDemiBold text-xs text-blackText-100'> تومان</span>
          </div>

            {/* Add to Cart Btn */}
          <div className='xs:hidden w-[156px] h-[34px] flex items-center justify-center justify-self-center gap-2 font-Dana text-xxs+ bg-brand rounded-lg' >
            <span> افزودن به سبد خرید</span>
          </div>

        </div>

        {/* Carts Wrapper */}
        <div className='flex xs:max-xl:overflow-auto gap-4 mt-4' >  
            <div className='flex flex-col text-center items-center  w-[156px] xs:w-[210px] bg-white max-xs:pl-2 px-4 py-3 rounded-lg shadow-4   ' >
              {/* Product Cover & Title */}
              <span className='mb-4' ><img className='w-[70px] xs:w-[100px] h-[70px] xs:h-[100px]' src="/images/shoes/Frame(8).png" alt="shoe8" /></span>
              <p className='font-DanaMedium text-xxs+ xs:text-sm text-blackText-200' >کتانی مخصوص پیاده روی پوما</p>

              {/* Response Category Desc */}
              <div className='max-xs:flex gap-2 max-xs:w-full max-xs:mt-[5px]'>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
              </div>

              {/* Description Cart */}
              <div className='flex xs:flex-col max-xs:w-full max-xs:justify-between'>
                {/* Price */}
                <div className='flex xs:gap-2 mt-2' >
                  <span className='font-DanaDemiBold max-xs:text-xxs+ text-blackText-200 xs:text-brand ' >4250000</span>
                  <div className='flex gap-2 font-DanaDemiBold xs:font-Dana text-xxs+ xs:text-xs text-blackText-200 xs:text-grayText-150' >
                    <span className='max-xs:hidden line-through' >6250000</span>
                    <span>تومان</span>
                  </div>
                </div>
                {/* More Btn */}
                <div className='max-xs:hidden flex items-center gap-2 p-2 self-end' >
                  <svg className='w-3 h-3' ><use href='#arrow-right'></use></svg>
                  <span className='font-Dana text-sm text-brand' >بیشتر</span>
                </div>
                {/* Response Btn  */}
               <button className='xs:hidden flex justify-center items-center gap-2  p-2 font-Dana text-xs bg-brand rounded-full '>
                  <span >
                    <svg className='w-3 h-3 ' ><use href='#plus' ></use></svg>
                  </span>
                  <span className='max-xs:hidden'>
                    افزودن 
                  </span>
               </button>

              </div>
              
            </div>
            
            {/* Carts Wrapper-2 */}
            <div className='flex flex-col text-center items-center  w-[156px] xs:w-[210px] bg-white max-xs:pl-2 px-4 py-3 rounded-lg shadow-4   ' >
              
              <span className='mb-4' ><img className='w-[70px] xs:w-[100px] h-[70px] xs:h-[100px]' src="/images/shoes/Frame(2).png" alt="" /></span>
              <p className='font-DanaMedium text-xxs+ xs:text-sm text-blackText-200' >کتانی مخصوص پیاده روی پوما</p>

              <div className='max-xs:flex gap-2 max-xs:w-full max-xs:mt-[5px]'>
              <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
              </div>

              <div className='flex xs:flex-col max-xs:w-full max-xs:justify-between'>
                  
              <div className='flex xs:gap-2 mt-2' >
                <span className='font-DanaDemiBold max-xs:text-xxs+ text-blackText-200 xs:text-brand ' >4250000</span>
                <div className='flex gap-2 font-DanaDemiBold xs:font-Dana text-xxs+ xs:text-xs text-blackText-200 xs:text-grayText-150' >
                  <span className='max-xs:hidden line-through' >6250000</span>
                  <span>تومان</span>
                </div>
              </div>

              <div className='max-xs:hidden flex items-center gap-2 p-2 self-end' >
                <svg className='w-3 h-3' ><use href='#arrow-right'></use></svg>
                <span className='font-Dana text-sm text-brand' >بیشتر</span>
              </div>
              
              <button className='xs:hidden flex justify-center items-center gap-2  p-2 font-Dana text-xs bg-brand rounded-full '>
                    <span >
                      <svg className='w-3 h-3 ' ><use href='#plus' ></use></svg>
                    </span>
                    <span className='max-xs:hidden'>
                      افزودن 
                    </span>
                  </button>
              </div>

            </div>
            <div className='max-xs:hidden flex flex-col text-center items-center  w-[156px] xs:w-[210px] bg-white max-xs:pl-2 px-4 py-3 rounded-lg shadow-4   ' >
              
              <span className='mb-4' ><img className='w-[70px] xs:w-[100px] h-[70px] xs:h-[100px]' src="/images/shoes/Frame(3).png" alt="" /></span>
              <p className='font-DanaMedium text-xxs+ xs:text-sm text-blackText-200' >کتانی مخصوص پیاده روی پوما</p>

              <div className='max-xs:flex gap-2 max-xs:w-full max-xs:mt-[5px]'>
              <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
              </div>

                <div className='flex xs:flex-col max-xs:w-full max-xs:justify-between' >
                <div className='flex xs:gap-2 mt-2' >
                <span className='font-DanaDemiBold max-xs:text-xxs+ text-blackText-200 xs:text-brand ' >4250000</span>
                <div className='flex gap-2 font-DanaDemiBold xs:font-Dana text-xxs+ xs:text-xs text-blackText-200 xs:text-grayText-150' >
                  <span className='max-xs:hidden line-through' >6250000</span>
                  <span>تومان</span>
                </div>
              </div>

              <div className='max-xs:hidden flex items-center gap-2 p-2 self-end' >
                <svg className='w-3 h-3' ><use href='#arrow-right'></use></svg>
                <span className='font-Dana text-sm text-brand' >بیشتر</span>
              </div>

              <button className='xs:hidden flex justify-center items-center gap-2  p-2 font-Dana text-xs bg-brand rounded-full '>
                    <span >
                      <svg className='w-3 h-3 ' ><use href='#plus' ></use></svg>
                    </span>
                    <span className='max-xs:hidden'>
                      افزودن 
                    </span>
                  </button>
                </div>
              
            </div>

             {/* Carts Wrapper-3 */}
            <div className='max-xs:hidden flex flex-col text-center items-center  w-[156px] xs:w-[210px] bg-white max-xs:pl-2 px-4 py-3 rounded-lg shadow-4   ' >
              
              <span className='mb-4' ><img className='w-[70px] xs:w-[100px] h-[70px] xs:h-[100px]' src="/images/shoes/Frame(4).png" alt="" /></span>
              <p className='font-DanaMedium text-xxs+ xs:text-sm text-blackText-200' >کتانی مخصوص پیاده روی پوما</p>

              <div className='max-xs:flex gap-2 max-xs:w-full max-xs:mt-[5px]'>
              <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
              </div>

              <div className='flex xs:flex-col max-xs:w-full max-xs:justify-between' > 
                    
              <div className='flex xs:gap-2 mt-2' >
                <span className='font-DanaDemiBold max-xs:text-xxs+ text-blackText-200 xs:text-brand ' >4250000</span>
                <div className='flex gap-2 font-DanaDemiBold xs:font-Dana text-xxs+ xs:text-xs text-blackText-200 xs:text-grayText-150' >
                  <span className='max-xs:hidden line-through' >6250000</span>
                  <span>تومان</span>
                </div>
              </div>

              <div className='max-xs:hidden flex items-center gap-2 p-2 self-end' >
                <svg className='w-3 h-3' ><use href='#arrow-right'></use></svg>
                <span className='font-Dana text-sm text-brand' >بیشتر</span>
              </div>

              <button className='xs:hidden flex justify-center items-center gap-2  p-2 font-Dana text-xs bg-brand rounded-full '>
                    <span >
                      <svg className='w-3 h-3 ' ><use href='#plus' ></use></svg>
                    </span>
                    <span className='max-xs:hidden'>
                      افزودن 
                    </span>
                  </button>
                </div>
              
            </div>

              {/* Carts Wrapper-4 */}
            <div className='max-xs:hidden flex flex-col text-center items-center  w-[156px] xs:w-[210px] bg-white max-xs:pl-2 px-4 py-3 rounded-lg shadow-4   ' >
              
              <span className='mb-4' ><img className='w-[70px] xs:w-[100px] h-[70px] xs:h-[100px]' src="/images/shoes/Frame(5).png" alt="" /></span>
              <p className='max-xs:hidden font-DanaMedium text-sm text-blackText-200' >کتانی مخصوص پیاده روی پوما</p>

              <div className='max-xs:flex gap-2 max-xs:w-full max-xs:mt-[5px]'>
              <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
                  <span className='xs:hidden xs:max-w-[187px] xs:max-h-[33px] whitespace-wrap overflow-hidden text-center leading-[18px] text-grayText-300 font-Dana text-xxs xs:text-xs xs:mb-4' >
                    {product.pCategory}
                  </span>
              </div>

                <div className='flex xs:flex-col max-xs:w-full max-xs:justify-between' >
                <div className='flex xs:gap-2 mt-2' >
                <span className='font-DanaDemiBold max-xs:text-xxs+ text-blackText-200 xs:text-brand ' >4250000</span>
                <div className='flex gap-2 font-DanaDemiBold xs:font-Dana text-xxs+ xs:text-xs text-blackText-200 xs:text-grayText-150' >
                  <span className='max-xs:hidden line-through' >6250000</span>
                  <span>تومان</span>
                </div>
              </div>

              <div className='max-xs:hidden flex items-center gap-2 p-2 self-end' >
                <svg className='w-3 h-3' ><use href='#arrow-right'></use></svg>
                <span className='font-Dana text-sm text-brand' >بیشتر</span>
              </div>

              <button className='xs:hidden flex justify-center items-center gap-2  p-2 font-Dana text-xs bg-brand rounded-full '>
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
    </section>

    </>
  )
}

export default Suggestion