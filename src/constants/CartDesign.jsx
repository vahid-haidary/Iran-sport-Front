// import React from 'react'
// import { Link } from 'react-router-dom';

// function CartDesign() {
//   return (
//     <>
//         <div key={product.pId} className='flex flex-col items-center bg-white rounded-lg shadow-2'>
//     <Link to={`/product/${product.pId}`}>
//   <img  className='w-[195px] h-[195px] mt-[13px]' src={product.pImgs} alt={product.pName} />
//     </Link>
//   <h3 className='max-w-[250px] text-center  mt-4 font-DanaDemiBold text-blackText-200 text-base' >{product.pName}</h3>
//   <div className='flex flex-col items-center child:mt-2 ' >
//     <span className='font-DanaDemiBold text-xl text-brand ' >{product.pPrice}</span>
//     <span className='font-Dana text-grayText-150 line-through' >{product.pDiscount}</span>
//     <span className='max-w-[187px] max-h-[33px] whitespace-wrap overflow-hidden text-center leadin-[18px] text-grayText-300 font-Dana text-xs mb-4' >
//       {product.pName}
//     </span>
//     <button className='flex justify-center items-center gap-2 w-[77px] mb-[18px] py-2 px-3 font-Dana text-xs bg-brand rounded'>

//       <span>
//         <svg className='w-3 h-3' ><use href='#plus' ></use></svg>
//       </span>
//       <span>
//       افزودن 
//       </span>

//     </button>

//   </div>
// </div>
//     </>
//   )
// }

// export default CartDesign