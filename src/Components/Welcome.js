import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'

export default class Welcome extends React.Component {
   render() {
      return(
      <>
      <div className="welcome">
         <h1>Welcome to</h1>
         <img className="welcome-Logo" src="/Settlers-Gen-Logo-Header.jpg" alt="The Settlers of CATAN Map Randomizer" />
      </div>
      <div className="spacer">
         <Link to="/main"> 
         <span><button className="home-btn" onClick={this.props.renderMain} >Click Me to Get Started</button></span>
         </Link>
      </div>
      </>
      ) 
   }
}