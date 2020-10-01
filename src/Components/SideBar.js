import React from "react"
import '../Style/Sidebar.css'

class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/main">Main</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/saves">Saves</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/settings">Settings</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
      </div>
    )
  }
}
  export default Sidebar