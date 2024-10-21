import React from 'react'
import {ApiCategories} from '../apifolder/CategoriesApi'
import Category from './Category'


const Categories = () => {
  return (
    <div className='flex justify-between items-center p-5 mobile:flex-col'>
    {
        ApiCategories.map((category, index)=>{
            return <Category item = {category} key={index}/>
        })
    }
    </div>
  )
}

export default Categories
