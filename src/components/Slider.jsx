import React from 'react'
import SlideElemet from '../constants/SlideElemet'

function Slider() {
  return (
    <>
    <div className='flex my-6 xs:my-12 max-xs:px-4 child:rounded-lg xs:child:rounded-2xl overflow-hidden w-full h-[564px] max-xs:h-[150px] '>
        
        <SlideElemet/>
        <div className='flex flex-col max-w-96 max-xs:max-w-36 absolute xs:top-[238px] max-xs:mt-6 right-10 xs:right-28 text-white z-10' >
          <h2 className='font-MorabbaBold max-xs:text-xs text-4xl' >فروشگاه ایران اسپرت</h2>
          {/* Paragraph Desktop */}
          <span className='max-xs:hidden max-h-[144px] overflow-hidden my-6 font-Dana max-xs:text-xxs leading-6' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </span>
          {/* Paragraph Mobile */}
          <span className='xs:hidden my-2 max-h-[36px] overflow-hidden font-Dana max-xs:text-xxs leading-3' >لورم ایپسوم متن ساختگی با تولید سادگـــــــی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است .</span>

          <div className='inline-flex items-center justify-center xs:w-[110px] xs:h-[42px] w-[85px] h-[30px] gap-2 max-xs:mt-[2px] border border-solid border-brand max-xs:bg-brand rounded-[4px] ' >

            <span>
              <svg className='w-4 h-4 max-xs:hidden ' ><use href='#basket' ></use></svg>
              <svg className='w-3 h-3 xs:hidden' ><use href='#shop-res' ></use></svg>
            </span>
            <a href='#'  className='text-brand font-Dana max-xs:text-xxs max-xs:text-blackText-200'>
            بریم خرید
            </a>

          </div>

        </div>
    </div>
    </>
  )
}

export default Slider