import React from 'react'

import star from './images/star.png'
export default function card(props) {

  let badgetext 
  
  let onlinestatus
  if(props.openSpots===0){
    badgetext="SOLD OUT"
     
  }
  else if(props.location==="Online"){
    badgetext="Online"
    onlinestatus= "card-status" 
     
  }
  return (
    <div className='cardp2 hover'>
     {badgetext && <div className='soldornot red'>{badgetext}</div>}
      {onlinestatus && <div className={onlinestatus}></div>}
        <img className='card-image'src={props.coverImg.s} alt='person'/>
        <div className='card-stats  '>
            <img className='card-star' src={star}  alt='star'/>
             <span className=''>{props.stats.rating}</span>  
             <span className='grey '>({props.stats.reviewCount}) • </span>
             <span className='grey '>{props.location}</span>
        </div>
        <p className='card-para  '>{props.title}</p>
        <p className='card-bottombox  '><span className='bold card-price'>From ${props.price}</span> /person</p>
    </div>
  )
}
