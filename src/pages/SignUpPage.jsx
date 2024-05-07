import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUpPage() {

  const navigate = useNavigate()

  function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())
    localStorage.setItem('formData', JSON.stringify(formValues))
    navigate("/")
  }
  return (
    <>
        <div className='w-full h-svh flex justify-center items-center' >
            <div className='flex max-xs:flex-col xs:w-3/4 xs:h-[600px] max-xs:pt-4 bg-boxes border-[2px] border-brand border-dashed rounded-xl '>
                <form className='flex flex-col gap-6 w-3/4 justify-center max-xs:items-center pr-16 child:font-Dana'onSubmit={handleSubmit}>

                  <label htmlFor="fName">نام:</label>
                  <input className='w-fit xs:w-3/4 h-11 pr-4  rounded-xl outline outline-2 outline-amber-500/20 focus:outline-amber-500/60' placeholder='نام را وارد کنید' type="text" name='fName' />

                  <label htmlFor="lName">نام خانوادگی:</label>
                  <input className='w-fit xs:w-3/4 h-11 pr-4  rounded-xl outline outline-2 outline-amber-500/20 focus:outline-amber-500/60' placeholder='نام خانوادگی را وارد کنید' type="text" name='lName' />

                  <label htmlFor="phoneNum">شماره همراه:</label>
                  <input className='w-fit xs:w-3/4 h-11 pr-4  rounded-xl outline outline-2 outline-amber-500/20 focus:outline-amber-500/60' placeholder='شماره موبایل وارد کنید' type="text" name='phoneNum' />

                  <label htmlFor="uEmail">آدرس ایمیل:</label>
                  <input className='w-fit xs:w-3/4 h-11 pr-4  rounded-xl outline outline-2 outline-amber-500/20 focus:outline-amber-500/60' placeholder='ایمیل وارد کنید' type="text" name='uEmail' />

                  <input className='w-full xs:w-3/4 h-11 bg-brand mt-8 rounded-xl' type="submit" name='uSubmit' value={"ارسال فرم"} />

                </form>
                  <span className='flex flex-col justify-center max-xs:items-center max-xs:py-5 font-MorabbaBold text-blackText-100 text-3xl'>
                    <Link to={"/"}>
                      <img src="../../public/images/Logo Shapes 23.png" className='w-14' alt="" />
                    </Link>
                    <h3>ایران اسپرت</h3>
                  </span>
            </div>
        </div>
    </>
  )
}

export default SignUpPage