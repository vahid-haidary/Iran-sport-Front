import React from 'react'

function Footer() {
  return (
    <>
    <section className='absolute bottom-0 left-0 right-0 h-fit bg-white ' >

      {/* TOP */}
      <div className='flex justify-around items-center h-36 px-[60px] pb-4 font-Dana text-blackText-200 child:text-center ' >

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
          <svg className='w-[50px] h-[51px]' ><use href='#medal' ></use></svg>
          </span>
          <span>امکان تحویل اکسپرس</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#box' ></use></svg>
          </span>
          <span>امکان تحویل اکسپرس</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#card-pos' ></use></svg>
          </span>
          <span>امکان پرداخت در محل</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[51px] h-[51px]' ><use href='#backward-5' ></use></svg>
          </span>
          <span>5 روز ضمانت بازگشت کالا</span>
        </div>

        <div className='flex flex-col items-center space-y-7 '  >
          <span>
            <svg className='w-[50px] h-[51px]' ><use href='#support' ></use></svg>
          </span>
          <span>پشتیبانی 24 ساعته</span>
        </div>

      </div>

      {/* CONTENT */}
      <div className='pt-16 px-28 child:text-grayText-400 ' > 

      {/* footer Container */}
      <div className='flex justify-between' >
        {/* Brand & About */}
        <div className=' flex flex-col justify-center max-w-[364px] text-[15px] font-Dana leading-[26px]' >
          <span>
            <img src="../../public/images/Logo Shapes 23.png" alt="" />
            <h6 className='text-grayText-300 text-sm' >ایران اسپرت</h6>
          </span>
          
          <p className='mt-[18px]'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است 
            </p>
        </div>

        {/* Links */}
        <div className='w-[235px] text-sm font-Dana' >

          {/* Title */}
          <h5 className='mb-[18px] text-lg font-DanaDemiBold ' >پیوند های مهم</h5>

          {/* Link Details */}
          <div className='flex justify-between' >
            
          <span className=' flex flex-col gap-y-4 child-hover:scale-105  ' >
            <a href="">فرصت های شغلی</a>
            <a href="">حریم خصوصی</a>
            <a href="">قوانین سایت</a>
            <a href="">تماس با ما</a>
            <a href="">درباره ما</a>
          </span>
          
          <span className=' flex flex-col gap-y-4 child-hover:scale-105  ' >
            <a href="">فرصت های شغلی</a>
            <a href="">حریم خصوصی</a>
            <a href="">قوانین سایت</a>
            <a href="">تماس با ما</a>
            <a href="">درباره ما</a>
          </span>

          </div>

        </div>

        {/* Contact us */}
        <div className='w-[258px] font-Dana py-[18px] ' >

          <h5 className='mb-[18px] text-lg font-DanaDemiBold text-blackText-100 '>تماس با ما</h5>

          <span className='flex gap-x-2  space-y-5 items-end' >
            <svg className='w-[24px] h-[24px]' ><use href='#location' ></use></svg>
            <p>تهران,سعادت آباد ,مجتمع فنی تهران</p>
          </span>

          <span className='flex gap-x-2 space-y-5 items-end ' >
            <svg className='w-[24px] h-[24px]' ><use href='#call-2' ></use></svg>
            <p>021-2353698</p>
          </span>

          <span className='flex gap-x-2  space-y-5 items-end' >
            <svg className='w-[24px] h-[24px]' ><use href='#sms' ></use></svg>
            <p>info@mftplus.com</p>
          </span>

        </div>




        {/* Follow us */}
        <div className='py-[15px]' >
          <h5 className='mb-6 text-lg font-DanaDemiBold text-blackText-100 ' >ما را دنبال کنید</h5>
          <div>

            <div className='flex gap-[6px] child-hover:scale-105 child:cursor-pointer ' >

            <svg className='w-7 h-7' ><use href='#whats-app' ></use></svg>
            <svg className='w-7 h-7' ><use href='#telegram' ></use></svg>
            <svg className='w-7 h-7' ><use href='#instagram' ></use></svg>
            <svg className='w-7 h-7' ><use href='#linkdin' ></use></svg>
            <svg className='w-7 h-7' ><use href='#twitter' ></use></svg>
            <svg className='w-7 h-7' ><use href='#facebook' ></use></svg>

            </div>

            {/* Enamads */}
            <div className='mt-6' >
              <img  className='w-[200px]' src="../../public/images/footer-namad.png" alt="namad" />
            </div>

          </div>
        </div>



      </div>

      {/* FOOTER TEXT */}
      <div className='flex justify-center my-6 font-Dana text-sm  ' >
        <h6 className='text-grayText-200' >تمامی حقوق سایت متعلق به علی شفیعی است</h6>
      </div>

      </div>


    </section>
    </>
  )
}

export default Footer