import React from 'react'

export default function Windowresize() {
    const[winsize, setwinsize]= React.useState(window.innerWidth)

    React.useEffect(()=>{

        function width(){
            setwinsize(window.innerWidth)
        }
        window.addEventListener("resize", width)

        return function(){
            window.removeEventListener("resize", width)
        }


    })



  return (
    <div><h1>{winsize}</h1></div>
  )
}
