import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class SideDrawer extends Component {
  render() {
    let drawerClasses='sideDraw';
    if(this.props.show){
        drawerClasses= 'sideDraw open';
    }

    return (
      <nav className={drawerClasses}>
          <ul>
          {
            this.props.sideLinks.map((link) => (
              <li key={link.id}><Link to={link.link} >{link.name}</Link></li>
            ))
          }
          </ul>
      </nav>
    )
  }
}