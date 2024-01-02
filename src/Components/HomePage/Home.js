import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Home.css'
import img from'../../Assets/2.jpg'
import { Bio } from '../../data/Constants'



const Home = () => {
  return (
    <div className='hero' id='/'>
      <div className='photo'>
        <img src={img} className='img1' alt='Not Available' />
      </div>

      <div className='homecontent'>
        <p>Hello, Welcome to my site</p>
        <h1>Hi, I'm {Bio.name}</h1>
        <h2 className='bingo'>
        <Typewriter
            words={Bio.roles}
            loop={0}
            cursor
            cursorStyle='|'
            cursorColor='white'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            
          />
        </h2>

        <div className='clickk'>
           <a href='Ayush Resume.pdf' download={'Ayush Resume.pdf'} className='a' target="_blank">
              <button className='click1'>Download Resume</button>
           </a>

           <a href={Bio.linkedin} className='a' target="_blank">
             <button className='click2'>HIRE ME</button>
           </a>
        </div>
      </div>
    </div>
  )
}

export default Home