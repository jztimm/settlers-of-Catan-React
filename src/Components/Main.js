import React from 'react'
import Sidebar from "./SideBar"
import Header from './Header'
import MapContainer from './MapContainer'
import RandGenBtn from './RandGenBtn'
import FaveBtn from './FaveBtn'

export default class Main extends React.Component {
   render() {
      return (
         <>
            <Sidebar />
            <Header />
            <span><RandGenBtn handleClick={this.props.handleClick} /></span>
            <span><FaveBtn /></span>
            <MapContainer />
         </>
      )
   }
}