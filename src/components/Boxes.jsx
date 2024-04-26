import React from 'react'

function Boxes() {
  return (
    <>
    <section className='xs:mt-[72px] max-xs:px-4 mt-8' >

    {/* Boxes Wrapper */}
        <div className='grid grid-cols-2 grid-rows-2 gap-4 xs:gap-6 child:rounded-lg child:bg-boxes xs:child:shadow-2'>

            {/* Box1 */}
            <div className='flex max-xs:flex-col items-center justify-between '>

                {/* Texts */}
                <div className='pr-2 pl-[18px] mt-4 xs:p-[30px]' >
                    <h4 className='font-DanaDemiBold text-xs xs:text-2xl mb-2 xs:mb-[15px]' >فروشگاه ایران اسپرت</h4>
                    <p className='max-w-[130px] xs:max-w-[363px] xs:mb-4 font-Dana text-blackText-100 max-xs:text-xxs'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <span className='max-xs:hidden w-[72px] h-[34px]  inline-flex justify-center items-center gap-2 font-DanaMedium text-xs bg-brand rounded' >
                        <svg className='w-3 h-3' ><use href='#info' ></use></svg>
                        <span>بیشتر</span>
                    </span>
                </div>
                {/* Cover */}
                <div className='max-xs:w-full max-xs:flex max-xs:justify-end'>
                    <img className='max-xs:w-[70px] max-xs:h-[86px]' src="/images/Boxes/boxes (1).png" alt="shoe1" />
                </div>

            </div>

            {/* Box2 */}
            <div className='flex max-xs:flex-col items-center justify-between '>

                {/* Text */}
                <div className='pr-2 pl-[18px] mt-4 xs:p-[30px]'>
                    <h4 className='font-DanaDemiBold text-xs xs:text-2xl mb-2 xs:mb-[15px]' >فروشگاه ایران اسپرت</h4>
                    <p className='max-w-[130px] xs:max-w-[363px] xs:mb-4 font-Dana text-blackText-100 max-xs:text-xxs'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <span className='max-xs:hidden w-[72px] h-[34px]  inline-flex justify-center items-center gap-2 font-DanaMedium text-xs bg-brand rounded' >
                        <svg className='w-3 h-3' ><use href='#info' ></use></svg>
                        <span>بیشتر</span>
                    </span>
                </div>
                {/* Cover */}
                <div className='max-xs:w-full max-xs:flex max-xs:justify-end'>
                    <img className='max-xs:w-[95px] max-xs:h-[84px]' src="/images/Boxes/boxes (2).png" alt="shoe2" />
                </div>

            </div>

                {/* Box3 */}
            <div className='flex max-xs:flex-col items-center justify-between '>

                {/* Text */}
                <div className='pr-2 pl-[18px] mt-4 xs:p-[30px]'>
                    <h4 className='font-DanaDemiBold text-xs xs:text-2xl mb-2 xs:mb-[15px]' >فروشگاه ایران اسپرت</h4>
                    <p className='max-w-[130px] xs:max-w-[363px] xs:mb-4 font-Dana text-blackText-100 max-xs:text-xxs'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <span className='max-xs:hidden w-[72px] h-[34px]  inline-flex justify-center items-center gap-2 font-DanaMedium text-xs bg-brand rounded' >
                        <svg className='w-3 h-3' ><use href='#info' ></use></svg>
                        <span>بیشتر</span>
                    </span>
                </div>
                {/* Cover */}
                <div className='max-xs:w-full max-xs:flex max-xs:justify-end'>
                    <img className='max-xs:w-[78px] max-xs:h-[83px]' src="/images/Boxes/boxes (3).png" alt="shoe3" />
                </div>

            </div>
            {/* Box4 */}
            <div className='flex max-xs:flex-col items-center justify-between '>

                {/* Text */}
                <div className='pr-2 pl-[18px] mt-4 xs:p-[30px]'>
                    <h4 className='font-DanaDemiBold text-xs xs:text-2xl mb-2 xs:mb-[15px]' >فروشگاه ایران اسپرت</h4>
                    <p className='max-w-[130px] xs:max-w-[363px] xs:mb-4 font-Dana text-blackText-100 max-xs:text-xxs'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    <span className='max-xs:hidden w-[72px] h-[34px]  inline-flex justify-center items-center gap-2 font-DanaMedium text-xs bg-brand rounded' >
                        <svg className='w-3 h-3' ><use href='#info' ></use></svg>
                        <span>بیشتر</span>
                    </span>
                </div>
                {/* Cover */}
                <div className='max-xs:w-full max-xs:flex max-xs:justify-end'>
                    <img className='max-xs:w-[97px] max-xs:h-[84px]' src="/images/Boxes/boxes (4).png" alt="shoe4" />
                </div>

            </div>


        </div>

    </section>
    </>
  )
}

export default Boxes