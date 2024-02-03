import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { remove } from '../store/cartSlice'

export default function Cart ()  {


  const dispatch = useDispatch()
  const products = useSelector( state => state.cart)

  const handleRemove = (productId) =>{
       dispatch( remove(productId) )
  }

  return (
    <div>
        <h3> Cart </h3>
        <div className='cartWrapper'>
              {
                products.map( product => (
                   <div className='cartCard'>
                          <img src={product.image} alt="" />
                          <h5>{product.title}</h5>
                          <button className='btn' onClick={() => handleRemove(product.id)}> Remove </button>
                   </div>
                ))
              }
        </div>
    </div>
  )
}


