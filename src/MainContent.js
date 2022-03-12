import React from 'react'
 import Myimage from './images/Myimage.png'
export default function MainContent(props){
    const style=props.setmode?{
        color:"white",
        
      }:{
   
        color:"black",
        
      }
    return(
        
    <div style={style}className='main'>
        <div className='main-heading-container'>
        <h1 className='main--heading-name'>Hey, I'm Sid.</h1>
        <h1 className='main--heading'>Fullstack Developer/ Designer</h1>

        <span className='bottom--icons'> 
        <ion-icon className='icons' name="logo-github">
          </ion-icon><ion-icon name="logo-linkedin">
          </ion-icon><ion-icon name="mail-outline"></ion-icon> </span>
          <button className='resume-btn'>Resume</button>
        </div>
        <img  className='Myimage' src={Myimage}  alt="myimage" />
            
    </div>)
  }
  