import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Welcome from './Components/Welcome'
import WorkInProgress from './Components/WorkInProgress'
import Main from './Components/Main'
import Login from './Components/Login'
import Users from './Components/Users'
import './App.css'
import './Style/Sidebar.css'
// import Header from "./Components/Header"
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
    ],
    users: []
  }

  // getApiData=()=>{
    
  // }
  
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(res => res.json())
      .then(data => this.setState({
        users: data
      }))
      .catch(err => console.log(err))
  }

  loopUsers=() => {
    const users = this.state.users
    return users.map(user => <Users key={user.id} user={user} />)
  }

  newBoard = (arr) => {
    // let board = this.state.board
    this.setState({ board: arr })
  }

  renderMain=()=>{
    
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
    console.log(this.state.users)
    return (
      <div>
        <Switch>

          <Route path="/home" exact render={() => <Welcome />} />
          <Route path="/login" exact render={() => <Login />}/>
          <Route path="/saves" exact render={() => <WorkInProgress />}/>
          <Route path="/settings" exact render={() => <WorkInProgress />}/>
          <Route path="/main" render={() => <Main handleClick={this.handleClick}/>} />
        
          <Route path="/alloftheusersinmydatabaseaswellasalloftheirinfo" exact render={() => <Users />} />
        </Switch>
      </div>
    )
  }
}

export default App;
