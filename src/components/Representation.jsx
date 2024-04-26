import React from 'react'

function Representation() {
  return (
    <>
    <section className='max-xs:hidden my-[72px] max-xs:px-4 bg-white shadow-4' >
        <div className='flex justify-between px-6 py-4' >

        <div className='flex gap-3'>

        <span><svg className='w-1 h-[60px]' ><use href='#line2' ></use></svg></span>

        <div className='flex flex-col justify-center  font-Dana' >

            <h6 className='font-DanaDemiBold text-xl text-blackText-200' >اعطای نمایندگی</h6>
            <p className='text-xs text-grayText-300 mt-1' >شما می توانید با کارشناسان پایا در ارتباط بوده و نمایندگی خود را دریافت کنید</p>
        </div>
        </div>


        <span className='flex justify-center items-center text-sm px-4 py-2 my-[9px]   rounded font-DanaMedium bg-brand' >
            درخواست نمایندگی
        </span>


        </div>
    </section>
    </>
  )
}

export default Representation