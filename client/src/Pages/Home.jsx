import React from 'react'
import BannerSlider from '../Components/BannerSlider'
import Testimonials from '../Components/Testimonials'
import Count from '../Components/Count'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <BannerSlider />
      <Testimonials />
      <Count />
      <Footer />
    </div>
  )
}

export default Home