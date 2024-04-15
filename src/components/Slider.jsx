import React from 'react'
import SlideElemet from '../constants/SlideElemet'

function Slider() {
  return (
    <>
    <div className='flex my-12 rounded-2xl overflow-hidden w-full h-[564px] '>
        
        <SlideElemet/>
        <div className='flex flex-col max-w-96 absolute top-[238px] right-36 text-white z-10' >
          <h2 className='font-MorabbaBold text-4xl' >فروشگاه ایران اسپرت</h2>
          <span className='my-6 font-Dana leading-6' >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </span>

          <div className='inline-flex items-center justify-center w-[110px] h-[42px] gap-2 border border-solid border-brand rounded-[4px] ' >

            <span>
              <svg className='w-4 h-4' ><use href='#basket' ></use></svg>
            </span>
            <a href='#'  className='text-brand font-Dana'>
            بریم خرید
            </a>

          </div>

        </div>
    </div>
    </>
  )
}

export default Slider