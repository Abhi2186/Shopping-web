import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useState } from 'react'

const Product = ({item}) => {
    const [hoverEffect, sethoverEffect] = useState(' opacity-0')
    const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'

    const handleHoverEnter = ()=>{
        sethoverEffect(' opacity-1 hover:bg-[(rgba(0,0,0,0.2)]')
    }
    const handleHoverExit = ()=>{
        sethoverEffect(' opacity-0')
    }
  return (
    <div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md
    shadow-lg m-2 relative' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
      <img src={item.src} alt='product_image'></img>
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ${hoverEffect}`}>
        <div className= {iconStyle}>
            <ShoppingCartOutlined/>
        </div>
        <div className= {iconStyle}>
            <FavoriteBorderOutlined/>
        </div>
        <div className={iconStyle}>
            <SearchOutlined/>
        </div>
      </div>
    </div>
  )
}

export default Product
