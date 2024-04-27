import React, { useRef, useState } from 'react'
import ProductsArray from '../constants/ProductsArray'
import CartDesign from '../constants/CartDesign';

function Products() {

  const [showAll, setShowAll] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(ProductsArray);

  const filterByCategory = (category) => {
    const filtered = ProductsArray.filter((product) => product.pCategory === category);
    setFilteredProducts(filtered);
  }

  const arrowDownRef = useRef(false)
  const arrowDownRef2 = useRef(false)
  const showProducts = () => {
    setShowAll(!showAll);
    arrowDownRef.current.style.transform = showAll ? 'rotate(0deg)' : 'rotate(180deg)';
    arrowDownRef2.current.style.transform = showAll ? 'rotate(0deg)' : 'rotate(180deg)';
  } 

  return (
    <>
      <section className='xs:mt-[72px] max-xs:px-4 mt-8' >

        {/* Filter Part Category */}
        <div className='flex justify-between'>

          {/* Filter Title */}
          <span>
            <h4 className='font-DanaDemiBold xs:text-xl text-xs text-blackText-200' >کفش های ایران اسپرت</h4>
          </span>
          {/* Filter Btns Wrapper */}
          <div className='flex justify-around items-center font-DanaMedium text-grayText-200 text-xxs+ xs:text-sm xs:before:w-[760px] before:w-[106px] before:h-[0.8px]  before:bg-grayText-50 ' >
            <button className='products-btn-css' onClick={() => setFilteredProducts(ProductsArray)}>همه</button>
            <button className='products-btn-css' onClick={() => filterByCategory('پیاده روی')}>کوه نوردی</button>
            <button className='products-btn-css max-xs:hidden ' onClick={() => filterByCategory('دوومیدانی')}>دومیدانی</button>
            <button className='products-btn-css max-xs:hidden ' onClick={() => filterByCategory('بسکتبال')}>بسکتبال</button>
            <button className='products-btn-css max-xs:hidden ' onClick={() => filterByCategory('والیبال')}>والیبال</button>
          </div>

        </div>
        
        {/* Products Wrapper */}
        <div className='grid grid-cols-2 xs:grid-cols-4 gap-x-4 gap-y-6 xs:gap-6 mt-8 xs:mt-12' >
          
          {filteredProducts.slice(0, showAll ? filteredProducts.length : 8 ).map((product)=>{
            return(
              <CartDesign product={product} key={product.pId}/>
            )
          })}

        </div>
          
          {/* More and Less Btn */}
        <div className='flex xs:flex-col items-center justify-center gap-2 text-blackText-100 mt-6 xs:mt-12 ' >
          <span className='font-DanaDemiBold text-xs xs:text-lg' >{showAll ? '' : 'بیشتر'}</span>
          <span onClick={showProducts}>
            {/* Desktop Svg */}
            <svg ref={arrowDownRef} id='arrow-down ' className='max-xs:hidden w-[35px] h-[35px] cursor-pointer' ><use href='#arrow-down' ></use></svg>
            {/* Mobile Svg */}
            <svg ref={arrowDownRef2} id='arrow-down ' className='xs:hidden w-4 h-4 cursor-pointer' ><use href='#arrow-left-res' ></use></svg>
          </span>
        </div>
        
      </section>
    </>
  )
}

export default Products
