import React from "react";

const Singleblock=({x:{name, country_code, description, temperament, life_span, weight:{metric}, image:{url}}})=>{
    // let url=image.id;
     return(
       <div key={name} className='Singleblock'>
           <div className="catimg" >
             <img src={url}  width='900px'/>
           </div>
           <div className="content">
             <p>{name}</p>
             <p><b>{country_code}</b></p>
             <p>Temperament:{temperament}</p>
             <p>{life_span}</p>
             <p>{metric}</p>
             <p>Description</p>
             <p>{description}</p>
           </div>
          
   
       </div>
   
     )
   
   }

   export default Singleblock;