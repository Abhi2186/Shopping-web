import { Send } from '@mui/icons-material'
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex justify-center items-center h-[350px] w-[100%] flex-col bg-blue-400'>
      <h1 className='text-[50px] font-bold'>
        NEWSLETTER
      </h1>
      <h2 className='text-[20px] mt-2 mobile:p-3 mobile:text-center'>
        Always in touch with us, for your favourite products
      </h2>
      <div className='flex mt-[3rem] items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden'>
        <input type='email' placeholder='Email' className='border-none pl-[20px] flex-[7] outline-none mobile:min-w-[20rem]'/>
        <button className='bg-green-800 flex-1 h-[100%]'>
            <Send className='text-white'/>
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
