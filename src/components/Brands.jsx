import React from 'react'

function Brands() {
  return (
    <>
    <section className='my-8 xs:my-[72px] max-xs:px-4 ' >
      {/* Brand Title */}
        <h3 className='font-DanaDemiBold text-xs xs:text-2xl text-blackText-200 text-center mb-4 xs:mb-[29px]' >محبوب ترین برند ها</h3>

        {/* Brand covers */}
        <div className='flex justify-center gap-2 xs:gap-[26px] max-xs:child:w-[60px] max-xs:child:h-[60px]' >
            <img src="/images/Brands/Logo-resize-3.png" alt="brands" />
            <img src="/images/Brands/Logo-resize-6.png" alt="brands" />
            <img src="/images/Brands/Logo-resize-2.png" alt="brands" />
            <img src="/images/Brands/Logo-resize-7.png" alt="brands" />
            <img src="/images/Brands/Logo-resize-8.png" alt="brands" />
        </div>
        
    </section>
    </>
  )
}

export default Brands