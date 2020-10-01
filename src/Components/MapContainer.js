import React from 'react'
import Canvas from "./MapRenderer.js"
// import Sidebar from "./SideBar.js"
// import Board from './Board'
// import RandGenBtn from './RandGenBtn'

import '../Style/Btn.css'

class MapContainer extends React.Component {

   render() {
      return (
         <>
            <MapRenderer board={this.props.board}/>
         </>
      )
   }
}

export default MapContainer

