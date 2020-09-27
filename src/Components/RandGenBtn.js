import React from 'react'
import { FaRandom } from 'react-icons/fa'
import '../Style/Btn.css'

class RandGenBtn extends React.Component {

   handleClick = () => {
      for (let i = 0; i < this.props.board.length; i++) {
         const randomBoard = this.props.board[Math.floor(Math.random() * this.props.board.length)]
         this.props.newBoard(randomBoard)
         console.log(randomBoard);
      }
   }

   render() {
      // console.log(this.props.board)
      return (
         <div className="btn-rand">
            <button onClick={this.handleClick} className="btn">RandonGenBtn <FaRandom size="1.2em" className="RandBtn" /></button>
         </div>
      )
   }
}

export default RandGenBtn

