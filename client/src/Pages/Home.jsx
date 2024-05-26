import React from 'react'
import BannerSlider from '../Components/BannerSlider'
import Testimonials from '../Components/Testimonials'
import Count from '../Components/Count'
import Timeline from '../Components/Timeline'
import StackedCards from '../Components/StackedCards'

function Home() {
  return (
    <div>
      <BannerSlider />
      <StackedCards />
      <Testimonials />
      <Count />
      <Timeline />
    </div>
  )
}

export default Home