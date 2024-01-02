import React, { useState } from 'react'
import './Navbar.css'
// import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll'
import { Bio } from '../../data/Constants'


const Navbar = () => {
 
//  const [isOpen, setIsOpen] = useState(false);
 const [color , setColor] = useState(false)
 const changeColor = () =>{
     if(window.scrollY >=100){
        setColor(true)
      }
      else{
        setColor(false)
      }
 }

 window.addEventListener("scroll" ,changeColor)
 
  return (
    
       <div className={color ? "nav nav-bg" : "nav"}>
          <div className='nav-container'>
             <div className='logo'>
               <Link to='/' className='linkk'>
                 <h1 className='title'><span className='A'>A</span>G</h1>
               </Link>
             </div>

             {/* <div className='mobile-Icon'>
                <FaBars onClick={() => setIsOpen(!isOpen)}/>
             </div> */}

             <div className='menu'>
               <ul className="nav-tabs">
                 <li><Link to="/" className='underline' duration={1000} >Home</Link></li>
                 <li><Link to='aboutUs' className='underline' duration={1000} spy={true}  offset={-80} >About Us</Link></li>
                 <li><Link to='education'  className='underline' duration={1000} offset={-30}>Education</Link></li>
                 <li><Link to='experience' className='underline' offset={-40}>Experience</Link></li>
                 <li><Link to='skill' className='underline'  duration={1000} offset={-80}>Skills</Link></li>
                 <li><Link to='projects' className='underline' offset={-30}>Projects</Link></li>
               </ul>
             </div>

             <div className='button-Container'>
                <a href={Bio.github} target="_blank" className='underline'><button className='btn'>Github Profile</button></a>
             </div>

       
          </div>
       </div>
   
  )
}

export default Navbar