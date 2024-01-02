import React from 'react'
import './EducationCard.css'

const EducationCard = ({ education }) => {
  return (
    <div className='card'>
       <div className='top'>
          <img src={education?.img}/>
          
          <div className='body'>
            <div className='Name'>{education?.school}</div>
            <div className='Degree'>{education?.degree}</div>
            <div className='Date'>{education?.date}</div>
          </div>
       </div>

       {/* <div className='grade'>
        <b>Grade :</b>{education.grade}
       </div> */}

       <div className='Description'>
        <span>{education?.desc}</span>
       </div>
    </div>
  )
}

export default EducationCard