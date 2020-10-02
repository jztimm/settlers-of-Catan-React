import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Welcome from './Components/Welcome'
import WorkInProgress from './Components/WorkInProgress'
import Main from './Components/Main'
import Login from './Components/Login'
import UsersContainer from './Components/UsersContainer'
import './App.css'
import './Style/Sidebar.css'
// import Header from "./Components/Header"
import SideBar from './Components/SideBar'
// import Board from './Components/Board'

class App extends React.Component {

  state = {
    board: [
      0,1,2,
      3,4,5,6,
      7,8,9,10,11,
      12,13,14,15,
      16,17,18
    ],
    user: null
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
    return (
      <>

          <SideBar />
        <Switch>

          <Route path="/login" exact render={() => <Login />}/>
          <Route path="/saves" exact render={() => <WorkInProgress />}/>
          <Route path="/settings" exact render={() => <WorkInProgress />}/>
          <Route path="/board" render={() => <Main handleClick={this.handleClick}/>} />
          <Route path="/alloftheusersinmydatabaseaswellasalloftheirinfo" exact render={() => <UsersContainer user={this.state.user} board={this.state.board}/>} />
          <Route path="/" render={() => <Welcome />} />
        </Switch>
      </>
    )
  }
}

export default App;
