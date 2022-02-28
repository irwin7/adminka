import React from 'react'
import { HomeHero } from '../components/Home/HomeHero/HomeHero'
import HomeNavig from '../components/Home/HomeNavig/HomeNavig'

const Home = () => {
  return (
    <div className='home'>
      <HomeNavig />
      <HomeHero />
    </div>
  )
}

export default Home