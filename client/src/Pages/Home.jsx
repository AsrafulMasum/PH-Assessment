import React from 'react'
import BannerSlider from '../Components/BannerSlider'
import Testimonials from '../Components/Testimonials'
import Count from '../Components/Count'
import Footer from '../Components/Footer'
import Timeline from '../Components/Timeline'

function Home() {
  return (
    <div>
      <BannerSlider />
      <Testimonials />
      <Count />
      <Timeline />
      <Footer />
    </div>
  )
}

export default Home