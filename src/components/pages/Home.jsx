import React from 'react'
import Announce from '../Announce'
import Navbar from '../Navbar'
import Slider from '../Slider'
import Categories from '../Categories'
import Products from '../Products'
import NewsLetter from '../NewsLetter'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Home
