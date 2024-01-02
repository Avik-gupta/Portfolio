import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/Constants'

const Projects = () => {
    
  const [toggle, setToggle] = useState('all');
  
  return (
    <div id='projects' className='ProjectsComponent'>
       <div className='wrapper4'>
          <div className='heading4'>
            <h1>PROJECTS</h1>
            <h2> I have projectsed on a wide range of projects. Here are some of my projects.</h2>
          </div>

          <div className='CardConatiner'>
             {toggle === 'all' && projects
               .map((projects) => (
              <ProjectCard projects={projects}  />
              ))}
          </div>
       </div>
    </div>
  )
}

export default Projects