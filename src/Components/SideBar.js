import React from "react"
import { NavLink } from "react-router-dom"
import '../Style/Sidebar.css'

class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
        <ul className="nav flex-column">
          <NavLink className="nav-link nav-item" to="/home">
            <a>Home</a>
            </NavLink>
          <NavLink className="nav-link nav-item" to="/board">
            <a>Board</a>
          </NavLink>
          <NavLink className="nav-link nav-item" to="/login">
            <a>Login</a>
          </NavLink>
          <NavLink className="nav-link nav-item" to="/saves">
            <a>Saves</a>
          </NavLink>
          <NavLink className="nav-link nav-item" to="/settings">
            <a>Settings</a>
          </NavLink>
        </ul>
      </div>
    )
  }
}
  export default Sidebar