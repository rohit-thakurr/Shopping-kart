import React  from 'react'
import Products from '../components/Products'


export default function Home() {

 
  return (
    <div>
       <h2>Welcome to the Redux Toollit store</h2>

       <section>
          <h3>Products</h3>
          <Products />
       </section>
    </div>
  )
}

