import React from 'react'
import Sidebar from "./SideBar.js"
import Canvas from "./Tile.js"
// import Board from './Board'
// import RandGenBtn from './RandGenBtn'

import '../Style/Btn.css'

class MapContainer extends React.Component {

   render() {
      return (
         <>
            <Sidebar />
            {/* <Board board={this.props.board}/> */}
            <Canvas />
         </>
      )
   }
}

export default MapContainer

