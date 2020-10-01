import React from 'react'
import Header from './Components/Header'
import MapContainer from './Components/MapContainer'
import RandGenBtn from './Components/RandGenBtn'
import FaveBtn from './Components/FaveBtn'
import Sidebar from "./Components/SideBar.js"
import './App.css'
import './Style/Sidebar.css'
// import SideBar from './Components/SideBar'
// import Board from './Components/Board'

class App extends React.Component {

  state = {
    board: [
      0,1,2,
      3,4,5,6,
      7,8,9,10,11,
      12,13,14,15,
      16,17,18
    ]
  }

  newBoard = (event) => {
    // let board = this.state.board
    this.setState({ board: event })
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Sidebar />
          <span><RandGenBtn len={this.board.length} newBoard={this.newBoard} /></span>
          <span><FaveBtn /></span>
          <MapContainer board={this.state.board}/>
        </div>
      </div>
    )
  }
}

export default App;
