import React, { useRef, useState } from 'react'
import ProductsArray from '../constants/ProductsArray'
import { Link } from 'react-router-dom';

function Products() {

  const [showAll, setShowAll] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(ProductsArray);

  const filterByCategory = (category) => {
    const filtered = ProductsArray.filter((product) => product.pCategory === category);
    setFilteredProducts(filtered);
  }

  const arrowDownRef = useRef(false)
  const showProducts = () => {
    setShowAll(!showAll);
    arrowDownRef.current.style.transform = showAll ? 'rotate(0deg)' : 'rotate(180deg)';
  } 

  return (
    <>
      <section className='xs:mt-[72px] max-xs:px-4 mt-8' >
        <div className='flex justify-between'>
          <span>
            <h4 className='font-DanaDemiBold xs:text-xl text-xs text-blackText-200' >کفش های ایران اسپرت</h4>
          </span>
          <div className='flex justify-around items-center font-DanaMedium text-grayText-200 text-xxs+ xs:text-sm xs:before:w-[760px] before:w-[106px] before:h-[0.8px]  before:bg-grayText-50 ' >
            <button className='products-btn-css' onClick={() => setFilteredProducts(ProductsArray)}>همه</button>
            <button className='products-btn-css' onClick={() => filterByCategory('پیاده روی')}>کوه نوردی</button>
            <button className='products-btn-css max-xs:hidden ' onClick={() => filterByCategory('دوومیدانی')}>دومیدانی</button>
            <button className='products-btn-css max-xs:hidden ' onClick={() => filterByCategory('بسکتبال')}>بسکتبال</button>
            <button className='products-btn-css max-xs:hidden ' onClick={() => filterByCategory('والیبال')}>والیبال</button>
          </div>
        </div>

        <div className='grid grid-cols-2 xs:grid-cols-4 gap-x-4 gap-y-6 xs:gap-6 mt-8 xs:mt-12' >
          
          {filteredProducts.slice(0, showAll ? filteredProducts.length : 8 ).map((product)=>{
            return(
              <div key={product.pId} className='flex flex-col items-center bg-white max-xs:px-2 rounded-lg xs:shadow-2'>
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

        <div className='flex xs:flex-col items-center justify-center gap-2 text-blackText-100 mt-6 xs:mt-12 ' >
          <span className='font-DanaDemiBold text-xs xs:text-lg' >{showAll ? '' : 'بیشتر'}</span>
          <span onClick={showProducts}>
            <svg ref={arrowDownRef} id='arrow-down ' className='max-xs:hidden w-[35px] h-[35px] cursor-pointer' ><use href='#arrow-down' ></use></svg>
            <svg ref={arrowDownRef} id='arrow-down ' className='xs:hidden w-4 h-4 cursor-pointer' ><use href='#arrow-left-res' ></use></svg>
          </span>
        </div>
        
      </section>
    </>
  )
}

export default Products
