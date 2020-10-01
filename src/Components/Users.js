import React from 'react'

export default class Users extends React.Component {
   render() {
      return (
         <div className="users">
            {this.props.user}
         </div>
      )
   }
}