import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
class Header extends Component{

   render(){
       return(
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
          
           <a href="https://github.com/amanda-rene" target="_blank"><GitHubIcon style={{color:"white"}}/></a>
           <a href="https://www.linkedin.com/in/amanda-white-a9343562/" target="_blank"><LinkedInIcon style={{color:"white"}}/></a>
         
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
          
          <Link to='/'>Home</Link>
          {/* <Link to='/about'>About</Link> */}
          <Link to='/projects'>Projects</Link>
          {/* <a href="https://www.linkedin.com/in/amanda-white-a9343562/" target="_blank">Linkedin</a> */}
          {/* <a href="https://docs.google.com/document/d/1XbCP5D3OTsb1ES_Az-tppa4afCo8D_tTQxsqehZ4qiU/edit?usp=sharing" target="_blank">Resume</a> */}
          <a href="https://www.linkedin.com/in/amanda-white-a9343562/" target="_blank">Contact</a>
         
        </div>

          <footer></footer>
        <div>
         
        </div>
    
        
      </div>

        
       )
   }
}
export default Header;