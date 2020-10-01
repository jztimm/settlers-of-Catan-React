import React from 'react'
import "../App.css";

export default class Login extends React.Component {
   render() {
      return (
         <div className="Login">
         <form >
         <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value=""
                />
      <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value=""
                    />
         </form>
         </div>
      )
   }
}
