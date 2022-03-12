import React from 'react'
 
 

 export default function Meme() {
 
  const [memeImage, setmemeImage]= React.useState({
    topText:"Welcome to Meme world",
    bottomText:"_Siddharth P",
    image:"https://ichef.bbci.co.uk/news/1024/branded_news/7CC2/production/_118283913_29xp-meme-mobilemasterat3x-v3.jpg",
  
  })

  const[ allmeme,setallmeme]=React.useState([])
 
 
   
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setallmeme(data.data.memes))
  },[] )
 

 
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allmeme.length)
    
  setmemeImage(prevmemeImage=>({
    ...prevmemeImage,
    image:allmeme[randomNumber].url}))
  }
  function handleChange(event){
    const{name, value}=event.target
    setmemeImage(prevstate=>({
     ...prevstate,[name]:value
    }))

  }
   
  return (
   <main>
        <div className='form'>
            <input 
            className='form--input' 
            placeholder='First word' 
            type='text'
            name="topText"
            onChange={handleChange}
            value={memeImage.topText}
            />
            <input 
            className='form--input'
             placeholder='Last word'
            type='text'
            name="bottomText"
            onChange={handleChange}
            value={memeImage.bottomText}
            />
             
            <button onClick={getMemeImage}className='meme-content-button'><ion-icon   className='bt-icon' name="color-wand-outline"></ion-icon>Get a new meme image</button>
        </div >
         <div className='meme'>
         <img src={memeImage.image} className="meme--image" alt='ssa'/>
        <h2 className="meme--text top"  >{memeImage.topText}</h2>
        <h2 className="meme--text bottom"  >{memeImage.bottomText}</h2>
          
    </div>
     
    </main>
  )
}
