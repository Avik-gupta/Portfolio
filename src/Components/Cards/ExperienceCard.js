import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ experience }) => {
  return (
    <div className='card'>
       <div className='top'>
          <img src={experience?.img}/>
          
          <div className='body'>
             <div className='role'>{experience?.role}</div>
             <div className='company'>{experience?.company}</div>
             <div className='date'>{experience?.date}</div>
          </div>
       </div>

       

       <div className='Description'>
          {
            experience?.desc && <span>{experience.desc}</span>
          }
          {
            experience?.skills && <>
              <br/>
              <div className='exp'>
                 <b>Skills </b>
                 <div className='ItemWrapper'>
                      {
                           experience?.skills?.map((skill,index)=>(
                              <div className='expskill'>
                               •{skill}
                            </div>
                        ))
                      }
                 </div>
              </div>
            
            </>
          }
       </div>

       {experience.doc && 
         <a href={experience.doc} target='new'>
            <div className='document'>
                <img src={experience.doc}/>
            </div>
         </a>
        }
    </div>
  )
}

export default ExperienceCard