import React from 'react'

function Blogs() {
  return (
    <>
    <section className='my-[72px]' >

        <div className='flex flex-col text-center items-center' >
            <h5 className='font-DanaDemiBold text-2xl text-blackText-200 leading-[34px]' >اخبار و مقالات</h5>
            <span className='font-Dana text-sm text-blackText-100 leading-[34px]' >بهترین مطالب روز</span>
            <svg className='w-[107px] h-[2px]' ><use href='#line' ></use></svg>
        </div>

        <div className='grid grid-cols-3 gap-6 mt-8 child:bg-white child:rounded-lg child:shadow-4' >

            <div>
                <img className='w-full' src="../../public/images/Blogs/blog-img1 2.png" alt="" />
                <div className='pr-7 mt-[19.5px] ' >
                <h4 className='font-DanaDemiBold text-xl text-blackText-200 mb-4' >بررسی کفش Nike مدل رانر</h4>
                <p className='max-w-[333px] h-[78px] font-Dana text-sm text-blackText-100 leading-[26px] ' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

                <div className='flex justify-between pl-6 mb-4' >
                    <div className='flex items-center gap-2 font-Dana text-xs text-gray-300' >
                        <span>
                            <svg className='w-5 h-5' ><use href='#calendar' ></use></svg>
                        </span>
                        <span>1402/01/15</span>
                    </div>
                    <div className='flex items-center gap-2 font-Dana text-sm text-brand' >
                        <span>
                            <svg className='w-4 h-4' ><use href='#more' ></use></svg>
                        </span>
                        <span>بیشتر</span>
                    </div>
                </div>
            </div>
                </div>

            <div>
                <img className='w-full' src="../../public/images/Blogs/blog-img1 2(1).png" alt="" />
                <div className='pr-7 mt-[19.5px] '>
                <h4 className='font-DanaDemiBold text-xl text-blackText-200 mb-4' >ویژگی های یک تیشرت ورزشی مناسب</h4>
                <p className='max-w-[333px] h-[78px] font-Dana text-sm text-blackText-100 leading-[26px] ' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

                <div className='flex justify-between pl-6 mb-4' >
                    <div className='flex items-center gap-2 font-Dana text-xs text-gray-300' >
                        <span>
                        <svg className='w-5 h-5' ><use href='#calendar' ></use></svg>
                        </span>
                        <span>1402/01/15</span>
                    </div>
                    <div className='flex items-center gap-2 font-Dana text-sm text-brand' >
                        <span>
                            <svg className='w-4 h-4' ><use href='#more' ></use></svg>
                        </span>
                        <span>بیشتر</span>
                    </div>
                </div>
                </div>
            </div>

            <div>
                <img className='w-full' src="../../public/images/Blogs/blog-img1 2(2).png" alt="" />
                <div className='pr-7 mt-[19.5px] '>
                <h4 className='font-DanaDemiBold text-xl text-blackText-200 mb-4' >بهترین کتانی های ورزشی سال</h4>
                <p className='max-w-[333px] h-[78px] font-Dana text-sm text-blackText-100 leading-[26px] ' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</p>

                <div className='flex justify-between pl-6 mb-4' >
                    <div className='flex items-center gap-2 font-Dana text-xs text-gray-300' >
                        <span>
                            <svg className='w-5 h-5' ><use href='#calendar' ></use></svg>
                        </span>
                        <span>1402/01/15</span>
                    </div>
                    <div className='flex items-center gap-2 font-Dana text-sm text-brand' >
                        <span>
                            <svg className='w-4 h-4' ><use href='#more' ></use></svg>
                        </span>
                        <span>بیشتر</span>
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