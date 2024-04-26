import React from 'react'

function Blogs() {
  return (
    <>
    <section className='mb-[23px] mt-8 xs:my-[72px] max-xs:px-4 ' >

        {/* Title */}
        <div className='flex flex-col text-center items-center' >
            <h5 className='font-DanaDemiBold text-xs xs:text-2xl text-blackText-200 leading-[18px] xs:leading-[34px]' >اخبار و مقالات</h5>
            <span className='font-Dana text-xxs+ xs:text-sm max-xs:mb-[10px] text-blackText-100 leading-[18px] xs:leading-[34px]' >بهترین مطالب روز</span>
            <svg className='w-[107px] h-[2px] max-xs:hidden ' ><use href='#line' ></use></svg>
            <svg className='w-[60px] h-[2px] xs:hidden ' ><use href='#line-res' ></use></svg>
        </div>

        {/* Blogs wrapper */}
        <div className='grid grid-cols-2 xs:grid-cols-3 gap-4 xs:gap-6 mt-8 child:bg-white child:rounded-lg xs:child:shadow-4' >

            {/* Blog1 */}
            <div>

                <img className='w-full max-xs:rounded-lg ' src="/images/Blogs/blog-img1 2.png" alt="" />
                <div className='xs:pr-7 p-2  mt-2 xs:mt-[19.5px] ' >
                <h4 className='font-DanaDemiBold text-xxs+ xs:text-xl text-blackText-200 mb-2 xs:mb-4' >بررسی کفش Nike مدل رانر</h4>
                <p className='max-w-[333px] max-h-16 overflow-hidden xs:h-[78px] mb-4 font-Dana text-xxs xs:text-sm text-blackText-100 leading-4  xs:leading-[26px] ' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

                <div className='flex justify-between max-xs:pt-4 xs:pl-6 xs:mb-4' >
                    <div className='flex items-center gap-1 xs:gap-2 font-Dana text-xs text-gray-300' >
                        <span>
                            <svg className='w-5 h-5' ><use href='#calendar' ></use></svg>
                        </span>
                        <span className='max-xs:text-xxs' >1402/01/15</span>
                    </div>
                    <div className='flex items-center gap-2 font-Dana text-sm text-brand' >
                        <span>
                            <svg className='w-4 h-4' ><use href='#more' ></use></svg>
                        </span>
                        <span className='max-xs:text-xxs' >بیشتر</span>
                    </div>
                </div>
                </div>

            </div>

            {/* Blog2 */}
            <div>

                <img className='w-full max-xs:rounded-lg ' src="/images/Blogs/blog-img1 2(1).png" alt="" />
                <div className='xs:pr-7 p-2 mt-2 xs:mt-[19.5px] '>
                <h4 className='font-DanaDemiBold text-xxs+ xs:text-xl text-blackText-200 mb-2 xs:mb-4' >ویژگی های یک تیشرت ورزشی </h4>
                <p className='max-w-[333px] max-h-16 overflow-hidden xs:h-[78px] mb-4 font-Dana text-xxs xs:text-sm text-blackText-100 leading-4  xs:leading-[26px] ' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

                <div className='flex justify-between max-xs:pt-4 xs:pl-6 xs:mb-4' >
                    <div className='flex items-center gap-1 xs:gap-2 font-Dana text-xs text-gray-300' >
                        <span>
                        <svg className='w-5 h-5' ><use href='#calendar' ></use></svg>
                        </span>
                        <span className='max-xs:text-xxs' >1402/01/15</span>
                    </div>
                    <div className='flex items-center gap-2 font-Dana text-sm text-brand' >
                        <span>
                            <svg className='w-4 h-4' ><use href='#more' ></use></svg>
                        </span>
                        <span className='max-xs:text-xxs' >بیشتر</span>
                    </div>
                </div>
                </div>

            </div>

            {/* Blog3 */}
            <div>

                <img className='w-full max-xs:rounded-lg ' src="/images/Blogs/blog-img1 2(2).png" alt="" />
                <div className='xs:pr-7 p-2 mt-2 xs:mt-[19.5px] '>
                <h4 className='font-DanaDemiBold text-xxs+ xs:text-xl text-blackText-200 mb-2 xs:mb-4' >بهترین کتانی های ورزشی سال</h4>
                <p className='max-w-[333px] max-h-16 overflow-hidden xs:h-[78px] mb-4 font-Dana text-xxs xs:text-sm text-blackText-100 leading-4 xs:leading-[26px] ' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

                <div className='flex justify-between max-xs:pt-4 xs:pl-6 xs:mb-4' >
                    <div className='flex items-center gap-1 xs:gap-2 font-Dana text-xs text-gray-300' >
                        <span>
                            <svg className='w-5 h-5' ><use href='#calendar' ></use></svg>
                        </span>
                        <span className='max-xs:text-xxs' >1402/01/15</span>
                    </div>
                    <div className='flex items-center gap-2 font-Dana text-sm text-brand' >
                        <span>
                            <svg className='w-4 h-4' ><use href='#more' ></use></svg>
                        </span>
                        <span className='max-xs:text-xxs' >بیشتر</span>
                    </div>
                </div>
                </div>

            </div>
        </div>

    </section>
    </>
  )
}

export default Blogs