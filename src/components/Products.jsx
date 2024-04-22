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
      <section className='mt-[72px]' >
        <div className='flex justify-between'>
          <span>
            <h4 className='font-DanaDemiBold text-xl text-blackText-200' >کفش های ایران اسپرت</h4>
          </span>
          <div className='flex justify-around items-center font-DanaMedium text-grayText-200 text-sm before:w-[760px] before:h-[0.8px]  before:bg-grayText-50 ' >
            <button className='products-btn-css' onClick={() => setFilteredProducts(ProductsArray)}>همه</button>
            <button className='products-btn-css' onClick={() => filterByCategory('پیاده روی')}>کوه نوردی</button>
            <button className='products-btn-css' onClick={() => filterByCategory('دوومیدانی')}>دومیدانی</button>
            <button className='products-btn-css' onClick={() => filterByCategory('بسکتبال')}>بسکتبال</button>
            <button className='products-btn-css' onClick={() => filterByCategory('والیبال')}>والیبال</button>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-6  mt-12' >
          
          {filteredProducts.slice(0, showAll ? filteredProducts.length : 8 ).map((product)=>{
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
                    <span >
                      <svg className='w-3 h-3 ' ><use href='#plus' ></use></svg>
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

        <div className='flex flex-col items-center justify-center gap-2 text-blackText-100 mt-12 ' >
          <span className='font-DanaDemiBold text-lg' >{showAll ? '' : 'بیشتر'}</span>
          <span onClick={showProducts}>
            <svg ref={arrowDownRef} id='arrow-down ' className='w-[35px] h-[35px] cursor-pointer' ><use href='#arrow-down' ></use></svg>
          </span>
        </div>
        
      </section>
    </>
  )
}

export default Products
