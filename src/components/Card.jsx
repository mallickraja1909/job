import React from 'react'
import StyledCard from '../styled/StyledCard'
function Card ({id, item}) {

    
    return (
         
        <StyledCard>
          
         
           <div id="desc">

           <img id="logo" src={item.logo} alt='hello' />

           <div id="description">
           <span>{item.company}</span>
            {item.new ? <span id="new">NEW</span>: false}
           {item.featured ? <span id="featured">FEATURED</span>:false} 
            <h3>{item.position}</h3>

           <span id="postedAt">{item.postedAt}</span>
           <span id="contract"> . {item.contract}</span>
           <span id="location"> . {item.location}</span>
           </div>

           </div>

           <div id="tools">
           <span>{item.role}</span>
           <span>{item.level}</span>
           {item.languages.map((language) => { return( <span>{language}</span> )})}
           {item.tools.map((tool) => { return( <span>{tool}</span> )})}
           </div>

           
          
        </StyledCard>
    )
}

export default Card