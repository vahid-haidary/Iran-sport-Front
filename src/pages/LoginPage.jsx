import React from 'react'

function LoginPage() {
  return (
    <>
    <section className='max-xl:flex-col-reverse flex justify-evenly items-center px-[60px] max-lg:mt-4 ' >

        <div>

          <div className='flex flex-col items-center max-xl:mt-11' >
            <span>
              <img className='w-16 h-11' src="/images/Logo Shapes 23.png" alt="Logo" />
            </span>
            <span className='font-DanaMedium text-2xl text-grayText-300 my-6 ' >
              خوش آمـدیـد 
            </span>
          </div>

          <div>
          <input className='w-[616px] h-[72px] max-lg:w-max p-6 rounded-lg font-Dana text-lg outline outline-2 outline-amber-500/20 focus:outline-amber-500/60'  type="email" placeholder='ایمیل خود را وارد کنید' pattern=".+@example\.com" size="30" maxLength={40}  />
          </div>

          <div className='flex justify-center pt-6 font-Dana' >
            <span className='text-grayText-200' > اکانت ندارید؟
            <a  className='text-brand font-DanaDemiBold ' href="#" >ثبت نام  </a>
            </span>
          </div>

        </div>
        <div>
          <img className='max-xl:max-w-96 max-lg:w-96 aspect-square'  src="./images/Login-logo.png" alt="Logo" />
        </div>

    </section>

    </>
  )
}

export default LoginPage