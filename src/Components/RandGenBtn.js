import React from 'react'
import { FaRandom } from 'react-icons/fa'
import '../Style/Btn.css'

class RandGenBtn extends React.Component {

   // handleClick = () => {
   //    let newBoard = [];
   //    for (let i = 0; i < this.props.len; i++) {
   //      newBoard[i] = Math.floor(Math.random() * this.props.len.length)
   //    }
   //    this.props.newBoard(newBoard);
   // }

   render() {
      // console.log(this.props.newBoard)
      return (
         <div className="btn-rand">
            <button onClick={this.props.handleClick} className="btn">RandonGenBtn <FaRandom size="1.2em" className="RandBtn" /></button>
         </div>
      )
   }
}

export default RandGenBtn

