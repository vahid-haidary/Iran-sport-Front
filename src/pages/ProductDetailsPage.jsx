import React from 'react'
import ExpressPost from '../components/ExpressPost'
import ProductDetailDesignTop from '../components/ProductDetailDesignTop'
import Comments from '../components/Comments'
import Suggestion from '../components/Suggestion'
import { useParams} from 'react-router-dom';
import ProductsArray from '../constants/ProductsArray'

function ProductDetailsPage() {

  const params = useParams()
  const matchingProduct = ProductsArray.find(product => product.pId === parseInt(params.id));

  return (
    <>
    <section className='xl:px-[60px] lg:px-8 mt-2 xs:mt-4' >
    
    {/* Top detail */}
    <ProductDetailDesignTop product={matchingProduct} />

    {/* Exporess post */}
    <div className='mt-12 mb-[72px] max-xs:hidden' >
    <ExpressPost/>
    </div>

    <Suggestion product={matchingProduct}/>

    <Comments/>


    </section>
    </>
  )
}

export default ProductDetailsPage