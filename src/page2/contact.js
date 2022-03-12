import React from 'react'

 
import icon from './images/phone-icon.png'
import mailicon from './images/mail-icon.png'
export default function Contact(props) {

  return (
    <div> <div className="contact-card  ">
    <img src={props.img} alt='cat'/>
    <h3 className=' '>{props.name}</h3>
    <div className="info-group   ">
        <img src={icon} alt='icon' />
        <p className=' '>{props.phone}</p>
    </div>
    <div className="info-group ">
        <img src={mailicon} alt='mailicon' />
        <p className=' '>{props.email}</p>
        
    </div>
</div></div>
  )
}
