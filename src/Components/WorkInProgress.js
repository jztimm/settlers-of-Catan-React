import React from 'react'
import Sidebar from "./SideBar"
import '../App.css'

export default class WorkInProgress extends React.Component {
   render() {
      return (
         <>
         <Sidebar />
         <img className="workinprogress" src="/maxresdefault.jpg" alt="Webpage Under Contruction" />
         </>
      )
   }
}