import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/Constants'
import EducationCard from '../Cards/ExperienceCard';

const Experience = () => {
  return (
    <div className='experienceComponent' id='experience'>
       <div className='wrapper1'>
          <div className='heading2'>
            <h1>Experience</h1>
            <h2> My work experience as a Front End Developer in Company and on different projects.</h2>
          </div>

          <div className='TimelineSection'>
             <Timeline>
                {
                  experiences.map((experience,index) =>(
                    <TimelineItem>
                      
                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="grey" />
                        {index !== experiences.length  && <TimelineConnector style={{ background: '#ffc107' }} />}
                      </TimelineSeparator>
                      
                      <TimelineContent style={{color:'White'}}  sx={{ py: '12px', px: 2 }}>
                        <EducationCard  experience={experience}/>
                      </TimelineContent>
                    </TimelineItem>
                  ))
                }
             </Timeline>
          </div>
       </div>
       
    </div>
  )
}

export default Experience