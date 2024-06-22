import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function BasketCart() {

    const [count, setCount] = useState({})
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])
    const dispatch = useDispatch()

    function minusCount(item){
        const newCount = {...count}
        newCount[item.pModel] = newCount[item.pModel] > 1 ? newCount[item.pModel] - 1 : 1
        setCount(newCount)
    }

    function plusCount(item){
        const newCount = {...count}
        newCount[item.pModel] = newCount[item.pModel] < 9 ? newCount[item.pModel] + 1 : 1
        setCount(newCount);
    }
    
    function getTotalPrice(item) {
        return item.pPrice * (count[item.pModel] || 1)
    }
    
    function deleteHandler(event){
        dispatch({type: "Remove_Item_From_Cart"})
        const itemName = event.target.parentNode.parentNode.querySelector("h5").innerText;
        console.log(itemName);
        const newCartItems = cartItems.filter(item => item.pModel !== itemName);
        setCartItems(newCartItems);
        localStorage.setItem("cartItems", JSON.stringify(newCartItems));
        // window.location.reload()
    }
    
    

  return (
    <>
    <section className='px-[60px] my-20'>
        <div className='w-full h-fit flex flex-col gap-4 px-10 py-9 bg-white shadow-1 rounded-xl overflow-y-auto' >

            <div className='flex max-xs:flex-col max-xs:gap-5 justify-between items-center mb-20 '>
                <h1 className='max-xs:text-center font-MorabbaBold text-3xl text-blackText-100'>
                    {!cartItems.length ? 'سبد خرید شما خالی است' : 'سبد خرید شما'}
                </h1>
                <img className='bg-brand rounded-2xl' src="../../public/images/icons8-basket-64.png" alt="" />
            </div>

            {cartItems.map((item, index) => (
                <div key={index} className='w-full flex max-xs:flex-col justify-between items-center shadow-1 p-3 xs:p-7 rounded-md'>
                    <div className='flex max-xs:flex-col items-center gap-3'>
                        <img className='w-[150px] h-[150px]' src={item.pImgs} alt="تصویر محصول" />
                        <span className='flex flex-col gap-3 font-Dana max-xs:text-xs'>
                            <h3>{item.pName}</h3>
                            <h5 className='max-xs:text-center font-DanaDemiBold'>{item.pModel}</h5>
                        </span>
                    </div>
                    <div className='flex max-xs:flex-col max-xs:mt-8 items-center gap-4 xs:gap-8'>
                        
                        <h5 className='font-Dana'>{getTotalPrice(item)} <span className='font-DanaDemiBold'>تومان</span></h5>
                        <img className='w-6 h-6 cursor-pointer hover:scale-105' onClick={(event) => deleteHandler(event, item)} src="../../public/images/delete.png" alt="Delete-Btn" />

                        <div className='flex items-center bg-slate-300 rounded-lg gap-2 font-DanaMedium'>
                            <button className='bg-grayText-200 p-2 rounded-md m-1 ' onClick={() => minusCount(item)}>-</button>
                            <span className='bg-slate-300'>{count[item.pModel] || 1}</span>
                            <button className='bg-grayText-200 p-2 rounded-md m-1 ' onClick={() => plusCount(item)}>+</button>
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