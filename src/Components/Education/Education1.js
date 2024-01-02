import React from 'react'
import './Education.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education , experiences } from '../../data/Constants'
import EducationCard from '../Cards/EducationCard';

const Education = () => {
  return (
    <div className='educationComponent' id='education'>
       <div className='wrapper1'>
          <div className='heading2'>
            <h1>EDUCATION</h1>
            <h2> My education has been a journey of self-discovery and growth. My educational details are as follows.</h2>
          </div>

          <div className='TimelineSection'>
             <Timeline>
                {
                  education.map((education,index) =>(
                    <TimelineItem>
                      <TimelineContent style={{color:'White'}}  sx={{ py: '12px', px: 2 }}>
                        <EducationCard  education={education}/>
                      </TimelineContent>

                      <TimelineSeparator>
                        <TimelineDot variant="outlined" color="grey" />
                        {index !== experiences.length  && <TimelineConnector style={{ background: '#ffc107' }} />}
                      </TimelineSeparator>
                    </TimelineItem>
                  ))
                }
             </Timeline>
          </div>
       </div>
       
    </div>
  )
}

export default Education