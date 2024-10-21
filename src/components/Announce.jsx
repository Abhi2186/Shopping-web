import { Close } from '@mui/icons-material'
import React, { useState } from 'react'

const Announce = () => {

    const [announceStyle,setannounceStyle] = useState('bg-orange-700 font-bold text-white flex items-center justify-center')

   const handleClose = ()=>{
        setannounceStyle(announceStyle + " hidden")
    }
  return (
    <div className={announceStyle}>
      <h2>
        Hurry up it's 40% off now
      </h2>
      <Close className='cursor-pointer' onClick = {handleClose}/>
    </div>
  )
}

export default Announce
