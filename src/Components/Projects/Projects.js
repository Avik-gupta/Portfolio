import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/Constants'

const Projects = () => {
    
  const [toggle, setToggle] = useState('all');

  const handleProjectClick = (project) => {
    // Enhanced URL construction:
    const gitHubUrl = `https://github.com/Avik-gupta/${project.repoName}`;

    // Redirect using window.location.href (ensures full URL construction):
    window.location.href = gitHubUrl;
  };
  
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
              <ProjectCard projects={projects}  onClick={handleProjectClick} />
              ))}
          </div>
       </div>
    </div>
  )
}

export default Projects