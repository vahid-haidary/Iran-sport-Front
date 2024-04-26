import React, { useState } from 'react';
import commentsUser from '../constants/commentsUser';

function Comments() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }



  return (
    <>
      <section className='max-xs:flex max-xs:flex-col mt-8 xs:my-[72px] max-xs:px-4'>

        {/* Top cart Title */}
        <div className='max-xs:hidden inline-block'>
          <h5 className='text-center font-DanaDemiBold text-blackText-200 text-xl mb-2 '>نظرات</h5>
          <p className='font-DanaMedium text-sm text-blackText-100'>مشتریان درباره ما چه میگویند؟</p>
          <span className='block w-full h-1 bg-brand rounded-xl mt-[13px]'></span>
        </div>

        {/* Middle cart Scroller */}
        <div className="flex relative max-xs:order-2 flex-col gap-2 ltr:[ltr] mt-6 xs:my-4 overflow-y-auto  xs:max-h-[297px] poem">

          {/* Comments */}
          {commentsUser.map((comment, index) => (
            <div
              key={index}
              className={`flex flex-row-reverse text-end gap-4 bg-white py-[22px] px-4 xs:pr-[2px] max-xs:pb-[22px] rounded-lg shadow-4 ${
                activeIndex !== null && activeIndex !== index ? "bler" : ""
              } ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              {/* Comment Cover */}
              <div className='max-xs:hidden' >
                <img src="/images/Profiles/soghra-image.png" alt="" />
              </div>
              
              {/* Comment Details */}
              <div className='flex flex-col'>
                <span className='font-DanaDemiBold text-sm xs:text-lg max-xs:mb-2'>{comment.name}</span>
                <span className='font-Dana text-xxs xs:text-xs text-grayText-400'>{comment.user}</span>
                <p className='font-Dana text-grayText-400 max-xs:text-xxs+ mt-2 xs:mt-[6px]'>{comment.comment}</p>
              </div>
              
            </div>
          ))}
        </div>

        {/* Down cart */}
        <form className='flex max-xs:flex-col items-end xs:items-center max-xs:order-1 gap-4 xs:gap-6 xs:mt-4'>

          {/* Input comment */}
          <input
            className='w-full h-[35px] xs:h-[50px] font-Dana rounded-full text-xxs xs:text-sm pr-6 py-2 shadow-4 focus:outline outline-1 outline-brand'
            placeholder='نظر خود را درباره این محصول با ما به اشتراک بگزارید'
            type="text"
          />
          {/* Submit comment */}
          <button className='w-[87px] xs:w-[200px] h-[27px] xs:h-[42px] font-Dana text-xxs+ xs:text-sm bg-brand py-2 rounded-full' type='submit' >ارسال نظر</button>

        </form>
        
      </section>
    </>
  );
}

export default Comments;