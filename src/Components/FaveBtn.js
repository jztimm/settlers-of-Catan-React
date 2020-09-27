import React from 'react'
import {FaRegHeart, FaHeart} from 'react-icons/fa'
import '../Style/Btn.css'

class FaveBtn extends React.Component {

   state = {
      clicked: false
   }

   clicked=() => {
      this.setState(prevState => ({ clicked: !prevState.clicked}))
   }

   render() {
      return (
         <button  className="btn" onClick={this.clicked}>{this.state.clicked ? <FaHeart size="2em" className="FaveBtn" /> : <FaRegHeart size="2em" className="FaveBtn" />}</button>
      )
   }
}

export default FaveBtn

