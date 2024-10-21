import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import NewsLetter from '../NewsLetter'
import Footer from '../Footer'
import Counter from '../Counter'

const Cart = () => {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <div className='p-5'>
        <div className='flex justify-center text-5xl'>
            Cart
        </div>
        <div className='flex items-center justify-between mt-4 mobile:flex-col'>
            <button className='btn bg-white text-sky-400 border-2 border-sky-400 hover:bg-white'>Continue Shopping</button>
            <div className='flex underline text-lg hover:cursor-pointer mobile:mt-3 mobile:mb-3'>
                <p>Items in your Cart : 3</p>
                <p className='ml-5'>Wishlist Item : 3</p>
            </div>
            <button className='btn'>Checkout</button>
        </div>
        <div className='flex mt-7 mobile:flex-col'>
                <div className='flex flex-col flex-1'>
                    {/* List of Products */}
                    <div className='flex w-[100%] h-auto items-center mobile:flex-col'>
                    <div className='product flex self-start pl-5'>
                        <img  className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                         src='https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?pad_color=cd1818'
                        alt='product_img'/>
                        <div className='description flex flex-col ml-5 h-auto justify-between'>
                            <p>
                                <b className='mr-2'>ID:</b> 12889789
                            </p>
                            <p>
                                <b className='mr-2'>Product:</b> Dazzing Sky Shirt
                            </p>
                            <p className='flex items-center justify-start'>
                                <b className='mr-2'>Color:</b> 
                                <div className='bg-[#44403c] w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-1'>

                                </div>
                            </p>
                            <p>
                                <b className='mr-2'>Size:</b> Large
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                      <Counter/>
                      <p className='flex items-center justify-center text-4xl mt-3'>
                        <b>$70</b>
                      </p>
                    </div>
                    </div>
                    <hr className='mt-7 mb-7'></hr>
                    {/* Second Product */}
                    <div className='flex w-[100%] h-auto items-center  mobile:flex-col'>
                    <div className='product flex self-start pl-5'>
                        <img  className='w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'
                         src='https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733'
                        alt='product_img'/>
                        <div className='description flex flex-col ml-5 h-auto justify-between'>
                            <p>
                                <b className='mr-2'>ID:</b> 12889789
                            </p>
                            <p>
                                <b className='mr-2'>Product:</b> Dazzing Sky Shirt
                            </p>
                            <p className='flex items-center justify-start'>
                                <b className='mr-2'>Color:</b> 
                                <div className='bg-[#0c0a09] w-[20px] h-[20px] rounded-full border-2 p-[10px] cursor-pointer ml-1'>

                                </div>
                            </p>
                            <p>
                                <b className='mr-2'>Size:</b> Large
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center flex-auto mobile:mt-3'>
                      <Counter/>
                      <p className='flex items-center justify-center text-4xl mt-3'>
                        <b>$70</b>
                      </p>
                    </div>
                    </div>
                    <hr className='mt-7 mb-7'></hr>
                </div>
                <div className=' p-5 flex-[0.4] w-auto h-[40vh] flex flex-col items-center border-2 border-sky-400 rounded-md shadow-lg'>
                  <h1 className='text-[2rem]'>Summary</h1> 
                  <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Subtotal</p>
                    <p>$100</p>
                    </div> 
                    <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping</p>
                    <p>$40</p>
                    </div> 
                    <div className='flex justify-between mt-3 w-[100%]'>
                    <p>Shipping discount</p>
                    <p>-$40</p>
                    </div> 
                    <div className='flex justify-between mt-3 w-[100%] text-3xl font-bold'>
                    <p>Total</p>
                    <p>$100</p>
                    </div> 
                </div>
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Cart
