import React from 'react'

export default function Box(props) {

    const styles     = {
        backgroundColor: props.on ? "black" :"red"

    }
         
  return (
    <div style={styles} onClick={()=>props.toggle(props.id)} className='boxs'>
        
    </div>
  )
}
