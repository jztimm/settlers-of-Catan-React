import React from 'react'

export default class Users extends React.Component {

   // loopUsers=() => {
   //    return users.map(user => <Users key={user.id} user={user} />)
   // }

   render() {
      console.log(this.props.user.name)
      return (
         <div className="users">
            <p>{this.props.user.name}</p>
         </div>
      )
   }
}