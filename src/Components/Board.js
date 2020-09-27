import React from 'react'
import '../Style/Board.css'
// import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma'

class Board extends React.Component {
   

   // loopBoard = () => {
   //    let board = this.state.board
   //    for (let i = 0; i < board.length; i++) { //this equals to the row in our matrix.
   //       for (let j = 0; j < board[i].length; j++) { //this equals to the column in each row.
   //          console.log(board[i][j] + " ");
   //       }
   //    }
   // }


   
   render() {
      return (
         <div className="board">
                <div className="board-row">
                    <div className="spacer"></div>
                    <div className="port port-left">?</div>
                    <div className="spacer"></div>
                    <div className="port port-left">🐑</div>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                </div>
                <div className="board-row">
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    {this.props.board[0]}
                    {/* {this.state.board}
                    {this.state.board} */}
                    <div className="port port-right">⛏</div>
                    <div className="spacer"></div>
                </div>
                <div className="board-row">
                    <div className="port port-left">🌲</div>
                    {this.props.board[1]}
                    <div>🐑</div>
                    {/* {this.state.board}
                    {this.state.board}
                    {this.state.board} */}
                    <div className="spacer"></div>
                </div>
                <div className="board-row">
                    <div className="spacer"></div>
                    {this.props.board[2]}
                    <div>🐑</div>
                    {/* {this.state.board}
                    {this.state.board}
                    {this.state.board}
                    {this.state.board} */}
                    <div className="port port-right">🐑</div>
                </div>
                <div className="board-row">
                    <div className="port port-left">🌾</div>
                    {this.props.board[3]}
                    <div>🐑</div>
                    {/* {this.state.board}
                    {this.state.board}
                    {this.state.board} */}
                    <div className="spacer"></div>
                </div>
                <div className="board-row">
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <div>🐑</div>
                    {this.props.board[4]}
                    <div>🐑</div>
                    {/* {this.state.board}
                    {this.state.board} */}
                    <div className="port port-right">🧱</div>
                    <div className="spacer"></div>
                </div>
                <div className="board-row">
                    <div className="spacer"></div>
                    <div className="port port-left">?</div>
                    <div className="spacer"></div>
                    <div className="port port-left">🐑</div>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                </div>
            </div>
         
      )
   }

   // <h3>{this.state.board}</h3>

   // componentDidMount(){
   //    this.loopBoard()
   // }

}


export default Board
