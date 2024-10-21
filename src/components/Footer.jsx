import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white bg-blue-700'

  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
      <div className='flex flex-1 flex-col flex-wrap p-2'>
        <h1 className='text-[25px]'>
        The world's destination for design
        </h1>
        <p>
        Get inspired by the work of millions of top-rated designers & agencies around the world.
       </p>
        <div className='flex items-center justify-center mt-3 self-start'>
            <div className={socialStyle + ' bg-blue-700'}>
                <Facebook/>
            </div>
            <div className={socialStyle + ' bg-pink-600'}>
                <Instagram/>
            </div>
            <div className={socialStyle + ' bg-sky-400'}>
                <Twitter/>
            </div>
            <div className={socialStyle + ' bg-red-600'}>
                <Pinterest/>
            </div>
        </div>
      </div>
      <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
              <LocationOnOutlined/>
              <p className='pl-3'>State of California</p>
            </div>
            <div className='flex m-3'>
              <LocalPhoneOutlined/>
              <p  className='pl-3'>+91 7677668787</p>
            </div>
            <div className='flex m-3'>
              <EmailOutlined/>
              <p  className='pl-3'>digitalhoop@gmail.com</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
