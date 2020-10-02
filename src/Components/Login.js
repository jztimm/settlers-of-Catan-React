import React from 'react'
import UsersContainer from './UsersContainer'
import "../App.css";

export default class Login extends React.Component {

   state = {
      logEmail: "",
      logPassword: "",
      signName: "",
      signEmail: "",
      signPassword: ""
   }

   changeHandler = (e) => {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   render() {
      return (
         <>
         {/* <Sidebar /> */}
         <div className="Login-Text">
            <h2>Login</h2>
         </div>
         <div className="Login">
         <form onSubmit={this.props.handleSubmitLog}>
            <input type="email" 
                        className="form-control"
                        name="logEmail" 
                        id="logEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={this.props.logEmail}
                        onChange={this.props.changeHandler}
               />
            <input type="password" 
                        className="form-control"
                        name="logPassword" 
                        id="logPassword" 
                        placeholder="Password"
                        value={this.props.logPassword}
                        onChange={this.props.changeHandler}
               />
            <button type="submit" className="btn btn-primary">Login</button>
         </form>
         </div>

         <div className="SignUp-Text">
            <h2>SignUp</h2>
         </div>
         <div className="SignUp">
         <form onSubmit={(e) => {
            e.preventDefault()
            this.props.submitHandler({name: e.target[0].value})
            this.setState({signName: "", signEmail: "", signPassword: ""})
            }}>

         <input type="name" 
                        className="form-control" 
                        name="signName"
                        id="signName" 
                        aria-describedby="nameHelp" 
                        placeholder="Enter name" 
                        value={this.state.signName}
                        onChange={this.changeHandler}
               />
            <input type="email" 
                        className="form-control" 
                        name="signEmail"
                        id="signEmail" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" 
                        value={this.state.signEmail}
                        onChange={this.changeHandler}
               />
            <input type="password" 
                        className="form-control" 
                        name="signPassword"
                        id="signPassword" 
                        placeholder="Password"
                        value={this.state.signPassword}
                        onChange={this.changeHandler}
               />
            <button type="submit" className="btn btn-primary">Register</button>
         </form>
         </div>
         </>
      )
   }
}
