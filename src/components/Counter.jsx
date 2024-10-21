import React from 'react'

const Counter = () => {
  return (
    <div className='flex items-center justify-center text-2xl'>
      Quantity 
      <div className='ml-5 shadow-md flex'>
        <div className='bg-sky-400 text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md'> 
            -
        </div>
        <div className='w-8 flex items-center justify-center border-[1px] border-sky-400'> 
           1
        </div>
        <div  className='bg-sky-400 text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md'> 
            +
        </div>
      </div>
    </div>
  )
}

export default Counter
