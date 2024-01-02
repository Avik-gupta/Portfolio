import React from 'react'
import './Skills1.css'
import { skills } from '../../data/Constants'



const Skills1 = () => {
  return (
    <div className='skillComponent' id='skill'>
      <div className='wrapper'>
          <div className='heading3'>
            <h1>SKILLS</h1>
            <h2>Here are some of my skills on which I have been working on for the past 1 years.</h2>
          </div>
 
          <div className='skillsContainer'>
            {
              skills.map((data1)=>(
                 <div className='skill'>
                    <h2 className='helio'>
                      {data1.title}
                    </h2>

                    <div className='skillList'>
                      {
                        data1.skills.map((item)=>(
                          <div className='skillItem'>
                             <img src={item.image} />
                             {item.name}
                          </div>
                        ))
                      }
                    </div>
                 </div>
              ))
            }
          </div>

      </div>
    </div>
  )
}

export default Skills1