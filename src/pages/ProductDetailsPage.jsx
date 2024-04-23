import React from 'react'
import ExpressPost from '../components/ExpressPost'
import ProductDetailDesignTop from '../components/ProductDetailDesignTop'
import Comments from '../components/Comments'
import Suggestion from '../components/Suggestion'

function ProductDetailsPage() {
  return (
    <>
    <section className='px-[60px] mt-4' >
    
    {/* Top detail */}
    <ProductDetailDesignTop/>

    {/* Exporess post */}
    <div className='mt-12 mb-[72px]' >
    <ExpressPost/>
    </div>

    <Suggestion/>

    <Comments/>


    </section>
    </>
  )
}

export default ProductDetailsPage