import React, { useEffect, useState } from 'react';
export const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function ProductDetailDesignTop({product}) {


  const [selectedImage, setSelectedImage] = useState("/images/shoes/rework-shoe-base.jpg");

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  }

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  function clickCart(){
    const productDetails = {
      pId : product.pId,
      pName : product.pName,
      pModel : product.pModel,
      pPrice : product.pPrice,
      pImgs : product.pImgs
    }
    cartItems.push(productDetails);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("productDetails", JSON.stringify(productDetails));
  }


  return (
    <>
    {/* Product Navigation */}
     <span className='font-Dana text-xxs xs:text-xs text-grayText-200 max-xs:px-4 ' >دیجی‌کالا / مد و پوشاک / زنانه و مردانه /کفش زنانه و مردانه /کفش ورزشی زنانه و مردانه</span>

    {/* Cart Detail product */}
<section className='xs:grid xs:grid-cols-3 gap-4 xs:gap-6 mt-[15px] max-xs:px-4' >

{/* Image Product */}
<div className='col-span-1 rounded-2xl'>
  {/* Image Dynamic Wrapper */}
  <div className='flex flex-col gap-4' > 
      {/* Base Pic */}
      <div className='max-xs:w-full xs:grid xs:row-span-3 xs:col-span-4'>
          <img className='w-full h-[264px] rounded-2xl xs:h-[430px] xs:w-[450px]' src={selectedImage} alt="BasePic" />
      </div>
      {/* More Pic */}
      <div className='max-xs:hidden flex justify-center gap-2 child:rounded-2xl'>
      <img className='xs:max-xl:w-[70px] xl:w-[100px] h-[100px]' src="/images/shoes/rework-shoe-1.jpg" onClick={handleImageClick} alt="shoes(1)" />
      <img className='xs:max-xl:w-[70px] xl:w-[100px] h-[100px]' src="/images/shoes/rework-shoe-2.jpg" onClick={handleImageClick} alt="shoes(3)" />
      <img className='xs:max-xl:w-[70px] xl:w-[100px] h-[100px]' src="/images/shoes/rework-shoe-3.jpg" onClick={handleImageClick} alt="shoes(4)" />
      <img className='xs:max-xl:w-[70px] xl:w-[100px] h-[100px] blur-[2px]' src="/images/shoes/rework-shoe-4.jpg" alt="shoes(2)" />
      </div>

  </div>
  
</div>

{/* Product Detail Cart Wrapper */}
<div className='xs: col-span-2 xs:bg-white p-4 xs:p-6 mb-6 rounded-2xl' >

  {/* Head cart */}
  <div className='flex justify-between items-center' >
    <h3 className='text-blackText-200 font-DanaDemiBold font-bold max-xs:text-xs' >{product.pName}  مدل  {product.pModel}</h3>
    <img className='max-xs:hidden' src="/images/Logo-puma.png" alt="" />
  </div>

    {/* Line Bottom */}
  <span className='max-xs:hidden block h-[1px] bg-grayText-50  my-4' ></span>

  {/* Main cart Wrapper */}
  <div className='flex justify-between' >

    {/* Right */}
    <div className='max-xs:flex max-xs:flex-col'>

      <div className='max-xs:flex max-xs:gap-4 max-xs:items-center max-xs:order-2'>

        {/* Color */}
      <div>
        <h5 className='text-blackText-200 text-xs xs:text-sm font-DanaDemiBold font-bold mb-2 xs:mb-4' >رنگ ها :</h5>
        <span className='flex gap-2 child:flex child:items-center child:justify-center' >
          <button className='bg-white rounded-full w-[25px] xs:w-[30px] h-[25px] xs:h-[30px] shadow-4' ><svg className='tiktik w-[11px] h-2 opacity-0  '><use href='#tik' ></use></svg></button>
          <button className='bg-black rounded-full w-[25px] xs:w-[30px] h-[25px] xs:h-[30px] shadow-4' ><svg className='tiktik w-[11px] h-2 opacity-0  '><use href='#tik' ></use></svg></button>
          <button className='bg-gray-700 rounded-full w-[25px] xs:w-[30px] h-[25px] xs:h-[30px] shadow-4' ><svg className='tiktik w-[11px] h-2 opacity-0  '><use href='#tik' ></use></svg></button>
        </span>
      </div>

      {/* Size */}
      <div className='xs:mt-6' >
        <h5 className='text-blackText-200 text-xs xs:text-sm font-DanaDemiBold font-bold'>سایز ها:</h5>

        <div className='flex justify-center relative max-w-[77px] xs:max-w-[106px] h-8 xs:h-10 mt-2 xs:mt-5' >
        <select name="custom-select" className='xs:w-full w-[77px] max-xs:text-xs border-none appearance-none px-2 xs:px-6 bg-primary font-DanaDemiBold rounded-lg max-xs:shadow-inner ' >
          <option value="0">۳۸</option>
          <option value="1">۳۹</option>
          <option value="2">۴۰</option>
          <option value="3">۴۲</option>
        </select>
        <span className='flex items-center justify-center absolute w-5 xs:w-9 bg-white left-0 top-0 bottom-0 m-[2px] max-xs:ml-1 rounded-lg ' >
          <svg className='w-[15px] h-[15px]' ><use href='#arrow' ></use></svg>
        </span>
        </div>

      </div>

      </div>

      {/* Detail */}
      <div className='mt-6 max-xs:order-1 max-xs:mb-8' >
        {/* Product Property */}
        <h5 className='text-blackText-200 text-xs xs:text-sm font-DanaDemiBold font-bold'>ویژگی ها:</h5>

        <div className='flex flex-col gap-2 child:flex mt-2 max-xs:leadng-[18px] '>

          <div className='max-xs:flex max-xs:gap-2 text-xs xs:text-sm'>
            <span className='font-Dana text-grayText-300' >جنس:</span>
            <p className='font-Dana text-blackText-100'>{product.pDesc.material}</p>
          </div>

          <div className='max-xs:flex max-xs:gap-2 text-xs xs:text-sm'>
            <span className='font-Dana text-grayText-300'>جنس زیره:</span>
            <p className='font-Dana text-blackText-100'>{product.pDesc.floorMaterial}</p>
          </div>

          <div className='max-xs:flex max-xs:gap-2 text-xs xs:text-sm'>
            <span className='font-Dana text-grayText-300'>نحوه بسته شدن کفش :</span>
            <p className='font-Dana text-blackText-100'>{product.pDesc.packing}</p>
          </div>

          <div className='max-xs:flex max-xs:gap-2 text-xs xs:text-sm'>
            <span className='font-Dana text-grayText-300'>کفی:</span>
            <p className='font-Dana text-blackText-100'>{product.pDesc.insole}</p>
          </div>

          <div className='max-xs:flex max-xs:gap-2 text-xs xs:text-sm'>
            <span className='font-Dana text-grayText-300'>ارتفاع ساق :</span>
            <p className='font-Dana text-blackText-100'>{product.pDesc.leg}</p>
          </div>

        </div>
      </div>

      {/* More Svg */}
      <div className='max-xs:hidden flex items-center gap-2 mt-6 mb-[14px]'>
        <svg className='w-3 h-3' ><use href='#more-2'></use></svg>
        <span className='font-DanaMedium text-xs text-[#5669D7]' >مشاهده بیشتر</span>
      </div>

    </div>



    {/* Left */}
    <div className='max-xs:hidden grid w-[312px] shadow-4 mt-[3px] px-[30px] rounded-lg' >
      <h5 className='text-blackText-200 text-sm font-DanaDemiBold font-bold mb-[29px] mt-4'>فروشنده</h5>

        {/* List */}
      <div className='flex flex-col gap-4 divide-y-[1px] divide-solid divide-grayText-50' >

        {/* Satisfaction Product  */}
        <div className='flex items-center justify-between  '>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#shop'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>ایران اسپرت</h6>
          </span>
          <span className='font-Dana text-xs text-blackText-100'>
          {product.pStar} رضایت کالا
          </span>
        </div>

        {/* Warranty Product */}
        <div className='flex items-center pt-4'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#sheild-tick'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>گارانتی اصالت و سلامت فیزیکی کالا</h6>
          </span>
        </div>

        {/* Stock Product */}
        <div className='flex items-center pt-4'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#shop'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>موجود در انبار</h6>
          </span>
        </div>

        {/* Score Product */}
        <div className='flex items-center pt-4'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#coin'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>150 امتیاز ایران اسپرت</h6>
          </span>
        </div>

        {/* Price Product */}
        <div className='flex items-center pt-4 justify-between'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#info-2'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>قیمت</h6>
          </span>
          <span>
            <span className='font-Dana text-sm text-blackText-100'>{product.pPrice}</span>
            <span className='font-DanaDemiBold text-xs text-blackText-100'>تومان</span>
          </span>
        </div>
      
      </div>

      {/* Add to cart Btn */}
      <div onClick={clickCart} className='w-[137px] h-[42px] flex items-center justify-center justify-self-center gap-2 font-Dana text-sm bg-brand mb-[25px] mt-[53px] rounded-lg cursor-pointer' >
        <svg className='w-4 h-4' ><use href='#shopping-cart'></use></svg>
          <span>افزودن به سبد</span>
      </div>

    </div>

  </div>

</div>

</section>

</>
  )}

export default ProductDetailDesignTop