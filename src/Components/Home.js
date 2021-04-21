import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Home extends Component{

   render(){
       return(
        <div class="nav">
        <input type="checkbox" id="nav-check"/>
        <div class="nav-header">
          <div class="nav-title">
            <header>Amanda White</header>
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
         
          <Link to='/about'>About</Link>
          <a href="http://stackoverflow.com/users/4084003/" target="_blank">Portfolio</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Resume</a>
          <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Contact</a>
         
        </div>
      </div>

        
       )
   }
}
export default Home;