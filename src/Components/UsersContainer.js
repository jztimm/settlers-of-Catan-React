import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from './Users'
import Login from './Login'

export default class UsersContainer extends React.Component {

   state = {
      users: []
   }

   componentDidMount() {
      fetch('http://localhost:3000/api/v1/users')
         .then(res => res.json())
         .then(data => this.setState({
         users: data
      }))
      .catch(err => console.log(err))
   }

   renderUsers=() => {
      return (
         this.state.users.map(userObj => <Users key={userObj.id} user={userObj} />)
      )
   }

   submitHandler = (obj) => {
      fetch("http://localhost:3000/api/v1/users", {
         method: "POST",
         headers: {
            "content-type": "application/json",
            "accept": "application/json"
         },
         body: JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(user => this.setState({ users: [...this.state.users, user]}))
   }

   render() {
      return (
         <>
            <Switch>
               <Route path="/Login" render={() => <Login submitHandler={this.submitHandler} 
               logEmail={this.state.logEmail}
               logPassword={this.state.logPassword}
               signName={this.state.signName}
               signEmail={this.state.signEmail}
               signPassword={this.state.signPassword}
               changeHandler={this.changeHandler}
               handleSubmitLog={this.handleSubmitLog}
               />}/>
               <Route path="/users/:id" render={({match}) => {
                  let id = parseInt(match.params.id)
                  let foundUsers = this.state.users.find((user) => user.id === id)
                  return <Users users={this.state.users} user={foundUsers} />
               }} />
            </Switch>


         {/* {this.props.user ? <h2>users</h2> : null} */}
         
         
         </>
      )
   }
}