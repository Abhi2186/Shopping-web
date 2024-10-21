import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import NewsLetter from '../NewsLetter'
import Footer from '../Footer'

const Cart = () => {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <div className='p-5'>
        <div className='flex justify-center text-5xl'>
            Cart
        </div>
        <div className='flex items-center justify-between mt-4'>
            <button className='btn bg-white text-sky-400 border-2 border-sky-400 hover:bg-white'>Continue Shopping</button>
            <div className='flex underline text-lg hover:cursor-pointer'>
                <p>Items in your Cart : 3</p>
                <p className='ml-5'>Wishlist Item : 3</p>
            </div>
            <button className='btn'>Checkout</button>
        </div>
        <div>
                <div>
                    {/* List of Products */}
                    <div>product desc</div>
                    <div>product quantity and Price</div>
                </div>
                <div>
                    Summary
                </div>
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Cart
