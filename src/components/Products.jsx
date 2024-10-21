import React from 'react'
import { ApiTopPropducts } from '../apifolder/TopProductsApi'
import Product from './Product'

const Products = () => {
  return (
    <div className='flex flex-wrap p-5 items-center justify-center'>
      {
        ApiTopPropducts.map((product, index)=>{
          return  <Product item = {product} key={index}/>
        })
    }
    </div>
  )
}

export default Products
