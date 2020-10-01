import React from 'react'
import {Route} from 'react-router-dom'
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

  // getApiData=()=>{
    
  // }
  
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      // .then(data => console.log(data))
      // .catch(err => console.log(err))
  }

  newBoard = (arr) => {
    // let board = this.state.board
    this.setState({ board: arr })
  }

  handleClick=() => {
    let currentBoard = this.state.board
    let newBoard = [];
    for (let i = 0; i < currentBoard.length; i++) {
      newBoard.push(Math.floor(Math.random() * currentBoard.length))
    }
    this.newBoard(newBoard)
  }


  render() {
    console.log(this.state.board)
    return (
      <div>
        <div>
          {/* <Route path= /> */}
          <Header />
          <Sidebar />
          <span><RandGenBtn handleClick={this.handleClick} /></span>
          <span><FaveBtn /></span>
          <MapContainer />
        </div>
      </div>
    )
  }
}

export default App;
