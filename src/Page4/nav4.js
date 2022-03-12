import React from 'react'
import yaoming from './images/yaoming-meme.jpg'
export default function header4() {
  return (
    <div className='nav4'>
        <img className='nav4-logo'src= {yaoming} alt='memelogo'/>
        <h1 className='nav4-heading'>Meme Generator</h1>
        <h4 className='nav4-righttext'>Roy's React Project 4</h4>
    </div>
  )
}
