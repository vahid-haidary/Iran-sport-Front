import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function BasketCart() {

    const [count,setCount] = useState(1)
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    function minusCount(){
        setCount(count-1)
        count > 1 ? setCount(count - 1) : setCount(1)
    }
    function plusCount(){
       count < 9 && setCount(count+1)
    }

    function deleteHandler(event){
        const itemName = event.target.parentNode.parentNode.querySelector("h3").innerText;
        const newCartItems = cartItems.filter(item => item.pName !== itemName);
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
    

  return (
    <>
    <section className='px-[60px] my-20'>
        <div className='w-full h-fit flex flex-col gap-4 px-10 py-9 bg-white shadow-1 rounded-xl overflow-y-auto' >

            <div className='flex justify-between items-center mb-20 '>
                <h1 className='font-MorabbaBold text-3xl text-blackText-100'>
                    {!cartItems.length ? 'سبد خرید شما خالی است' : 'سبد خرید شما'}
                </h1>
                <img className='bg-brand rounded-2xl' src="../../public/images/icons8-basket-64.png" alt="" />
            </div>

            {cartItems.map((item, index) => (
                <div key={index} className='vahid w-full flex justify-between items-center shadow-1 p-7 rounded-md'>
                    <div className='flex items-center gap-3'>
                        <img className='w-[150px] h-[150px]' src={item.pImgs} alt="تصویر محصول" />
                        <span className='flex flex-col gap-3 font-Dana'>
                            <h3>{item.pName}</h3>
                            <h5>{item.pModel}</h5>
                        </span>
                    </div>
                    <div className='flex items-center gap-8'>
                        
                        <h5 className='font-Dana'>{item.pPrice}</h5>
                        <img className='w-6 h-6 cursor-pointer' onClick={deleteHandler} src="../../public/images/delete.png" alt="Delete-Btn" />

                        <div className='flex items-center bg-slate-300 rounded-lg gap-2 font-DanaMedium'>
                            <button className='bg-grayText-200 p-2 rounded-md m-1 ' onClick={minusCount}>-</button>
                            <span className='bg-slate-300'>{count}</span>
                            <button className='bg-grayText-200 p-2 rounded-md m-1 ' onClick={plusCount}>+</button>
                        </div>
                    </div>
                </div>
                
            ))}

        {cartItems.length > 0 && <Link to={"/login"}><button className= 'flex bg-green-600 text-white font-Dana m-auto px-8 py-2 rounded-lg'>پرداخت</button></Link>}        
        </div>
    </section>
</>
  )
}

export default BasketCart