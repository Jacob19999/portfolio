import React from 'react'
import '../css/footer.css';
import facebookIco from '../img/facebook.png';
import linkedinIco from '../img/linkedin.png';
import githubIco from '../img/github.png';

const Footer = () => {
  return (

    <footer>

      <div className="footer-content">
        
      </div>

      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Jacob Tang</a>{" "}
        </p>

        <ul>
          <li>
            <a href="https://github.com/Jacob19999/Space_Simulator">
            <img src={githubIco} alt="Profile" className="icon-pic" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jacob-tang-74536488/">
            <img src={linkedinIco} alt="Profile" className="icon-pic" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/tang.zijian/">
            <img src={facebookIco} alt="Profile" className="icon-pic" />
            </a>
          </li>
        </ul>

      </div>
    </footer>

  )
}

export default Footer
