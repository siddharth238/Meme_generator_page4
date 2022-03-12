import React from 'react'
import Group77 from './images/Group 77.png'

export default function Picturebody() {
  const date=new Date()
  return (
    
    <div className='bodyp2'> 
        <img className='bodyimagep2' src= {Group77} alt='gall'/>
        <h1 className="bodyheadp2 white"  >Online Experiences, the time is {date.toLocaleTimeString()}</h1>
            <p className="bodyparap2 white"  >Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
