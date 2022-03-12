import React from 'react'

export default function Header(props){
  const style=props.setmode?{
    backgroundColor:"black",
    color:"white",
    
  }:{
    backgroundColor:"white",
    color:"black",
    boxShadow: "1px 9px 24px -5px rgba(0,0,0,0.34)"
  }

  const _name="Siddharth ?{_dev}`"
   
   
    return( <header className='header'>
      <nav style={style} className="nav">
        <img className='nav--logo left'src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react_logo' />
        
        <h3 className='nav--logo_text' > {_name}</h3>
       
         <h4 className='nav--right_text'>React Course-Project I</h4>
      </nav>
    </header>
    )
    
  }
