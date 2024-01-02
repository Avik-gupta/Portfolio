import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ projects, setOpenModal }) => {
  
  
  return (
    <div className='card1'>
       <img src={projects?.image} />
       <div className='tags'>
        {
          projects.tags?.map((projects,index) =>(
            <span className='tag'>{projects}</span>
          ))
        }
       </div>

       <div className='details'>
          <div className='title1'>{projects?.title}</div>
          <div className='date1'>{projects?.date}</div>
          {/* <div className='description1'>{projects?.description}</div> */}
       </div>
    </div>
  )
}

export default ProjectCard