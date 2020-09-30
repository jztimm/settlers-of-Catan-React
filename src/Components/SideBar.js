import React from "react"
import '../Style/Sidebar.css'

class Sidebar extends React.Component {

  render() {
    return (
      <div className="Sidebar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
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