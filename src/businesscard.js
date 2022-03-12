import React from 'react'
import cardperson from './images/cardperson.jpg'
import gmail from './images/gmail.png'
import linkedin from './images/linkedin.png'
export default function Businesscard(props){
    const style=props.setmode?{
        backgroundColor:"white",
      
        
      }:{
        backgroundColor:"black",
        
        
      }
    return(<div style={style} className='card'>
        <img className='card--image'src={cardperson} alt='person'/>
        <div className='card--info'>
        <h1 className='card--heading text'>Siddharth P</h1>
        <h2 className='text'>Dev.</h2>
        <h3 className='text'>siddharthroyx@gmail.com</h3>
        </div>
        <div className='card--social'> 
             <button type='button' className='button linkedin'  >
                 <span className='button--icon'><ion-icon name="logo-linkedin"></ion-icon></span>
                 <span className='button--text text'>Linkedin</span>
                 </button>
             <button type='button' className='button email' >
                 <span className='button--icon'><ion-icon name="mail-outline"></ion-icon></span>
                 <span className='button--text text'>Email</span>
                 </button>
        </div>
        <div className='card--infobottom'>
        <div class='para'>
         <h1 className='card--bottomhead text '>About</h1>
         <p className='text'>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length</p>
         </div>
         <div className='para'>
         <h1 className='card--bottomhead'>Interests</h1>
         <p>Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length  </p>
         </div>
        </div>
        <div className='card--footer'>
        <span className='bottom--icons'><ion-icon className='icons' name="logo-facebook"></ion-icon><ion-icon className='icons' name="logo-linkedin"></ion-icon><ion-icon name="logo-instagram"></ion-icon><ion-icon name="mail-outline"></ion-icon><ion-icon name="camera-outline"></ion-icon></span>
        </div>
    </div>)
}