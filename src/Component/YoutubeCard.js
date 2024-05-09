
import React from 'react'

function Card({image,heading,para}) {
  return (
    <div style={{
                 width:"355px",
                 borderRadius:"10px",
                 display:"inline-block",        
                  margin:"45px",
                 
                 }}>

          <img height={"200px"} src= {image}/>
         <h4>{heading}</h4>
         <p>{para}</p>
      

   </div>
  )
}

export default Card