import React from 'react'
import Nav3 from './nav3'
import Location from './location'
import Darkmode from './Darkmode'


export default function Page3() {
   

  return (
    <div>
         
        <Nav3/> 
        <div className='location-set'>
        <Location/>
        <Location/>
        
        <Location/>
         
        </div>
        
    </div>
  )
}
