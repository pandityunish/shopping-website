import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import Product from './product';
export default function ProductsSection() {
    const {popularProducts}=useSelector((store)=>store.popularProduct);
  return (
    <div className='lg:mx-16 mx-0 flex overflow-x-auto'>
     {popularProducts.map((product,i)=>{
        return <Product  description={product.description} images={product.images} name={product.name} price={product.price} rating={product.rating} key={i} product={product} />
     })}
    </div>
  )
}
