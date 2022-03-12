import React from 'react'
 

 
import Header from './Header';
 
import MainContent from './MainContent';
import Businesscard from './businesscard';
 

export default function Page1() {
    const [darkmode,setdarkmode]=React.useState(false)

     function toggle(){
         setdarkmode(prev=>!prev)
     }
     const style=darkmode?{
        backgroundColor:"black",
      }:{
        backgroundColor:"white",
      }
    return(<div style={style}>
        <button className="darkmodebtn"onClick={toggle}>saaaaaaaaaa</button>   
        <Header setmode={darkmode}/>
        <MainContent setmode={darkmode}/>
        
              
       </div>)
}