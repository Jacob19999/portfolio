import React from 'react'
import '../css/home.css';
import profilePic from '../img/profilepic2.png';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div className="home-page">
      <div className="displaybox">
        <img src={profilePic} alt="Profile" className="picture-round" />
                
        <div className="infoboxRight">
          <h1>
            Jacob Tang
          </h1>
          <h3 className='typewriter-job' style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Software Developer',  'Data Analyst']}
              loop={50}
              cursor
              cursorStyle='|'
              typeSpeed={30}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </h3>
          <p className='typewriter-description' style={{ color: 'black' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Former logistics data analyst at Shell and software teaching assistant at Minnesota State University.']}
              loop={1}
              cursor
              cursorStyle=''
              typeSpeed={10}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>

          <p className='typewriter-description' style={{ color: 'black' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['I have multiple projects game development and full stack web development under my portfolio and 3 years of full-time working experience as Regional Logistics Analyst in Shell.']}
              loop={1}
              cursor
              cursorStyle='|'
              typeSpeed={10}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          


        </div>
      </div> 
    </div>
  )
}

export default Home
