import React from 'react'

function ProductDetailDesignTop() {
  return (
    <>
     <span className='font-Dana text-xs text-grayText-200 ' >دیجی‌کالا / مد و پوشاک / زنانه و مردانه /کفش زنانه و مردانه /کفش ورزشی زنانه و مردانه</span>

          {/* Cart Detail product */}
<section className='grid grid-cols-3 gap-6 mt-[15px]' >

{/* Image Product */}
<div className='col-span-1 rounded-2xl'>
  <div className=''>
      <div className='grid row-span-3 col-span-4'>
          <img className='w-full h-full' src="../../public/images/shoes/Frame-231.png" alt="" />
      </div>
      <div className='flex'>
      <img src="../../public/images/shoes/Frame-232 (1).png" alt="" />
      <img src="../../public/images/shoes/Frame-232 (3).png" alt="" />
      <img src="../../public/images/shoes/Frame-232 (4).png" alt="" />
      <img src="../../public/images/shoes/Frame-232 (2).png" alt="" />
      </div>

  </div>
  
</div>

<div className='col-span-2 bg-white p-6 mb-6 rounded-2xl' >

  {/* Head cart */}
  <div className='flex justify-between items-center' >
    <h3 className='text-blackText-200 font-DanaDemiBold font-bold' >کفش پیاده روی مدل AJ11 CMFT LOW CW0784-104</h3>
    <img src="../../public/images/Logo-puma.png" alt="" />
  </div>

  <span className=' block h-[1px] bg-grayText-50  my-4' ></span>

  {/* Main cart */}
  <div className='flex justify-between' >

    {/* Right */}
    <div>

      {/* Color */}
      <div>
        <h5 className='text-blackText-200 text-sm font-DanaDemiBold font-bold mb-4' >رنگ ها :</h5>
        <span className='flex gap-2 child:flex child:items-center child:justify-center' >
          <button className='bg-white rounded-full w-[30px] h-[30px] shadow-4' ><svg className='tiktik w-[11px] h-2 opacity-0  '><use href='#tik' ></use></svg></button>
          <button className='bg-black rounded-full w-[30px] h-[30px] shadow-4' ><svg className='tiktik w-[11px] h-2 opacity-0  '><use href='#tik' ></use></svg></button>
          <button className='bg-gray-700 rounded-full w-[30px] h-[30px] shadow-4' ><svg className='tiktik w-[11px] h-2 opacity-0  '><use href='#tik' ></use></svg></button>
        </span>
      </div>

      {/* Size */}
      <div className='mt-6' >
        <h5 className='text-blackText-200 text-sm font-DanaDemiBold font-bold'>سایز ها:</h5>

        <div className='flex justify-center relative max-w-[106px] h-10 mt-5' >
        <select name="custom-select" className='border-none appearance-none w-full px-6 bg-primary font-DanaDemiBold rounded-lg ' >
          <option value="0">۳۸</option>
          <option value="1">۳۹</option>
          <option value="2">۴۰</option>
          <option value="3">۴۲</option>
        </select>
        <span className='flex items-center justify-center absolute w-9 bg-white left-0 top-0 bottom-0 m-[2px] rounded-lg ' >
          <svg className='w-[15px] h-[15px]' ><use href='#arrow' ></use></svg>
        </span>
        </div>

      </div>

      {/* Detail */}
      <div className='mt-6' >

        <h5 className='text-blackText-200 text-sm font-DanaDemiBold font-bold'>ویژگی ها:</h5>

        <div className='flex flex-col gap-2 child:flex mt-2 '>

          <div>
            <span className='font-Dana text-sm text-grayText-300' >جنس:</span>
            <p className='font-Dana text-sm text-blackText-100'>چرم مصنوعی،لاستیک ،مش</p>
          </div>

          <div>
            <span className='font-Dana text-sm text-grayText-300'>جنس زیره:</span>
            <p className='font-Dana text-sm text-blackText-100'>فوم فشرده،لاستیک</p>
          </div>

          <div>
            <span className='font-Dana text-sm text-grayText-300'>نحوه بسته شدن کفش :</span>
            <p className='font-Dana text-sm text-blackText-100'>بندی</p>
          </div>

          <div>
            <span className='font-Dana text-sm text-grayText-300'>کفی:</span>
            <p className='font-Dana text-sm text-blackText-100'>بالشتک هوا، قابلیت گردش هوا، طبی، قابل تعویض</p>
          </div>

          <div>
            <span className='font-Dana text-sm text-grayText-300'>ارتفاع ساق :</span>
            <p className='font-Dana text-sm text-blackText-100'>مچ پا</p>
          </div>

        </div>
      </div>

      {/* More */}
      <div className='flex items-center gap-2 mt-6 mb-[14px]'>
        <svg className='w-3 h-3' ><use href='#more-2'></use></svg>
        <span className='font-DanaMedium text-xs text-[#5669D7]' >مشاهده بیشتر</span>
      </div>

    </div>



    {/* Left */}
    <div className='grid w-[312px] shadow-4 mt-[3px] px-[30px] rounded-lg' >
      <h5 className='text-blackText-200 text-sm font-DanaDemiBold font-bold mb-[29px] mt-4'>فروشنده</h5>

      <div className='flex flex-col gap-4 divide-y-[1px] divide-solid divide-grayText-50' >
        {/* List */}
        <div className='flex items-center justify-between  '>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#shop'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>ایران اسپرت</h6>
          </span>
          <span className='font-Dana text-xs text-blackText-100'>
          ٪95 رضایت کالا
          </span>
        </div>
        <div className='flex items-center pt-4'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#sheild-tick'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>گارانتی اصالت و سلامت فیزیکی کالا</h6>
          </span>
        </div>

        <div className='flex items-center pt-4'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#shop'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>موجود در انبار</h6>
          </span>
        </div>

        <div className='flex items-center pt-4'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#coin'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>150 امتیاز ایران اسپرت</h6>
          </span>
        </div>

        <div className='flex items-center pt-4 justify-between'>
          <span className='flex gap-2'>
            <svg className='h-5 w-5' ><use href='#info-2'></use></svg>
            <h6 className='font-Dana text-sm text-blackText-100'>قیمت</h6>
          </span>
          <span>
            <span className='font-Dana text-sm text-blackText-100'>5,800,000</span>
            <span className='font-DanaDemiBold text-xs text-blackText-100'>تومان</span>
          </span>
        </div>

      </div>
      <div className='w-[137px] h-[42px] flex items-center justify-center justify-self-center gap-2 font-Dana text-sm bg-brand mb-[25px] mt-[53px] rounded-lg' >
        <svg className='w-4 h-4' ><use href='#shopping-cart'></use></svg>
        <span>افزودن به سبد</span>
      </div>



    </div>

  </div>

</div>

</section>

    </>
  )
}

export default ProductDetailDesignTop