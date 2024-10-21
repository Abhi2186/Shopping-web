import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import NewsLetter from '../NewsLetter'
import Footer from '../Footer'
import Counter from '../Counter'

const ProductPage = () => {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <div className='flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3'>
        <div className='flex flex-1 items-center justify-center'>
            <img src='https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812'
            alt='product_image' className='w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'></img>
        </div>
        <div className='flex-[1.3] flex justify-items-start items-start flex-col mt-10 mobile:items-center'>
            <h1 className='title text-[40px] mobile:text-[30px]'> Black Hoodie Original</h1>
            <p className='pr-[4rem] text-justify mt-4 mobile:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum asperiores ut nihil libero ipsum magni? Nam in reprehenderit veritatis consequatur. Placeat distinctio id, amet aliquam minus earum corporis ipsam sequi?</p>
        <p className='mt-7 text-3xl'>Price: <b>$350</b></p>
        <div className='flex mt-7 text-2xl'>
            Colors  
            <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-blue-500'></div>
            <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-blue-500'></div>
            <div className='bg-green-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-blue-500'></div>
        </div>
        <div className='mt-7 text-2xl'>
            Size
            <select className='ml-5 border-2'>
                <option selected disabled> Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </select>
        </div>
        <div className='mt-5'>
            <Counter/>
        </div>
        <button className='btn mt-5'>Add to cart</button>
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default ProductPage
