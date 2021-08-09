import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card content">
                   <span className="card-tittle">Project Tittle = {id} </span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Ad asperiores modi aut reprehenderit nemo incidunt voluptas velit 
                       perspiciatis aliquam consequuntur facere, quam quis doloremque ratione earum? 
                       Eum eligendi iste est.
                       </p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by Net Ninja</div>
                   <div>2nd September, 2am</div>
               </div>
           </div>
       </div>
    )
}

export default ProjectDetails
