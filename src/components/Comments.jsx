import React, { useState } from 'react';

function Comments() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Define comments array with dummy data for example purposes
  const comments = [
    {
      name: 'یگانه احمدی',
      user: 'کاربر سایت',
      comment: 'سلام با تشکر از سایت خوب ایران اسپرت خرید این کفش را به همه پیشنهاد می کنم و در یک کلام بگم بخری بردی'
    },
    {
      name: 'محسن عبدالهی',
      user: 'کاربر سایت',
      comment: 'این محصول واقعا عالیه، من خیلی راضی هستم'
    },
    {
      name: 'سارا محمدی',
      user: 'کاربر سایت',
      comment: 'من این محصول رو تست کردم و خیلی راضی بودم. پیشنهاد می‌کنم'
    }
  ];

  function handleClick(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <>
      <section className='my-[72px]'>
        {/* Top cart */}
        <div className='inline-block'>
          <h5 className='text-center font-DanaDemiBold text-blackText-200 text-xl mb-2 '>نظرات</h5>
          <p className='font-DanaMedium text-sm text-blackText-100'>مشتریان درباره ما چه میگویند؟</p>
          <span className='block w-full h-1 bg-brand rounded-xl mt-[13px]'></span>
        </div>

        {/* Middle cart */}
        <div className="flex relative  flex-col gap-2 ltr:[ltr] my-4 overflow-y-auto  max-h-[297px] poem">

          {/* Each Comment */}
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`flex flex-row-reverse text-end gap-4 bg-white py-[22px] pr-[2px] rounded-lg shadow-4 ${
                activeIndex !== null && activeIndex !== index ? "bler" : ""
              } ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div>
                <img src="../../public/images/Profiles/soghra-image.png" alt="" />
              </div>

              <div className='flex flex-col'>
                <span className='font-DanaDemiBold text-lg'>{comment.name}</span>
                <span className='font-Dana text-xs text-grayText-400'>{comment.user}</span>
                <p className='font-Dana text-grayText-400 mt-[6px]'>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Down cart */}
        <div className='flex items-center gap-6 mt-4'>
          <input
            className='w-full h-[50px] font-Dana rounded-full text-sm pr-6 py-2 shadow-4 focus:outline outline-1 outline-brand'
            placeholder='نظر خود را درباره این محصول با ما به اشتراک بگزارید'
            type="text"
          />
          <button className='w-[200px] h-[42px] font-Dana text-sm bg-brand py-2 rounded-full'>ارسال نظر</button>
        </div>
      </section>
    </>
  );
}

export default Comments;