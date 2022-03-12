import React from 'react'
import Nav2 from './Nav2'
 import Picturebody from './Picturebody'
 import Card from './card'
 import Contact from './contact'
 import cat1 from './images/mr-whiskerson.png'
 import cat2 from './images/felix.png'
 import cat3 from './images/fluffykins.png'
 import cat4 from './images/pumpkin.png'
  import data from './data'
export default function page2() {

    const card= data.map(i=>{
        return(
            <Card
         
        key={i.id}
        {...i}
        />
        )

    })
  return (
      <div> 
     <Nav2/>
    <Picturebody/>
     
     <div className='contacts'>
     <Contact 
                img={cat1} 
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact 
                img={cat2}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact 
                img={cat3}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={cat4}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
     </div>
     <div className='card-list'>
         {card}
     </div>
      
    </div>
  )
}
