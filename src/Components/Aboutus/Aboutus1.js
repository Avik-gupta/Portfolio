import React from 'react'
import './Aboutus.css'
import img from '../../Assets/img.png'
import { Bio } from '../../data/Constants'


const AboutUs = () => {
  return (
    <div className='about' id='aboutUs'>
      
       <div className='heading1'>
          <h1>About Us</h1>
       </div>
       
       <div className='content1'>
       <div className='left'>
         <img src={img} alt='Not Available'/>
       </div>
       
       <div className='right'>
         <div className='intro'> 
           <h1>Hello, I'm <span>{Bio.name}</span></h1>
         </div>

         <div className='paragraph'>
            <p>{Bio.description}</p>
         </div>

         <div className='details'>
            <div>
              <p>
                <span className='title'>Age:</span>
                <span className='value'>22 Years</span>
              </p>
            </div>

            <div>
              <p>
                <span className='title'>Birthday:</span>
                <span className='value'>12<sup>th</sup> November 2000</span>
              </p>
            </div>

            <div>
              <p>
                <span className='title'>Email:</span>
                <span className='value'>ayush.gupta6234@gmail.com</span>
              </p>
            </div>

            <div>
              <p>
                <span className='title'>Contact No:</span>
                <span className='value'>8770197504</span>
              </p>
            </div>

            <div>
              <p>
                <span className='title'>City:   </span>
                <span className='value'>Indore ,Madhya Pradesh</span>
              </p>
            </div>
         </div>
       </div>
       </div>
    </div>
  )
}

export default AboutUs