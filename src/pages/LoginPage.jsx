import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  function clickHandler() {
    const formData = JSON.parse(localStorage.getItem('formData'));
    const storedEmail = formData.uEmail;

    if (email === storedEmail) {
      alert(`خوش اومدی  ${formData.fName}`);
      navigate("/")
    } else {
      alert('ایمیل نامعتبر است');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <section className='max-xl:flex-col-reverse flex justify-evenly items-center px-[60px] max-lg:mt-4'>
        <div>
          <div className='flex flex-col items-center max-xl:mt-11'>
            <Link to={'/'}>
              <img className='w-16 h-11' src='/images/Logo Shapes 23.png' alt='Logo' />
            </Link>
            <span className='font-DanaMedium text-2xl text-grayText-300 my-6 '>خوش آمـدیـد</span>
          </div>

          <div>
            <input
              className='w-[616px] h-[72px] max-lg:w-max p-6 rounded-lg font-Dana text-lg outline outline-2 outline-amber-500/20 focus:outline-amber-500/60'
              type='email'
              placeholder='ایمیل خود را وارد کنید'
              maxLength={40}
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className='text-center mt-7'>
            <button className='bg-brand text-blackText-200 font-Dana px-8 py-3 rounded-md' onClick={clickHandler}>
              ورود
            </button>
          </div>

          <div className='flex justify-center pt-6 font-Dana'>
            <span className='text-grayText-200'>
              {' '}
              اکانت ندارید؟
              <Link to={'/sign-up'} className='text-brand font-DanaDemiBold '>
                ثبت نام{' '}
              </Link>
            </span>
          </div>
        </div>
        <div>
          <img className='max-xl:max-w-96 max-lg:w-96 aspect-square' src='./images/Login-logo.png' alt='Logo' />
        </div>
      </section>
    </>
  );
}

export default LoginPage;