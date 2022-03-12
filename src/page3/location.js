import React from 'react'
import mount_fuju from './images/mount_fuji.jpg'
export default function Location() {
  return (
    <div className='p3-location-card'>
        <img className='p3-image' src={mount_fuju}alt='ima ge'/>
        <div className='p3-right'>
             <div className='p3-location-row'>
              <div className='location-outline'><ion-icon name="location-outline"></ion-icon> </div>
                 <div className='p3-location-name'>Japan</div>
                 <a className='p3-location-link' href="https://www.google.com" target="_blank" rel="noopener noreferrer">view on Google maps.</a>
             </div>
             <div className='p3-title'>Mount Fuji</div>
             <div className='p3-date'>Wednesday, 23 February 2022</div>
             <p className='p3-para'>a social meeting planned before it happens, especially one between two people who have or might have a romantic relationship:
            </p>
        </div>
    </div>
  )
}
