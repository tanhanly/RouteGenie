import React from 'react'
import { Button } from '../ui/button'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      <h1 className= "font-extrabold text-[50px] text-center mt-16"> 
      <span className= 'text-[#f56551]'> Embark on Your Next Adventure with AI: </span> Personalized Itineraries at your fingertips</h1>
      <p className= 'text-xl text-gray-500 text-center'> Unleash the power of AI to craft personalized travel experiences. Your own trip planner and travel curator, creating unique itineraries that perfectly match your passions and budget. Wherever you dream to go, we’ll get you there in style </p>
    <Link to = {'./create-trip'} >
    <Button> Get Started, it's Free</Button>
    </Link>
    </div>
  )
}

export default Hero
