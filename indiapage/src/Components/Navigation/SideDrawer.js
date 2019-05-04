import React, { Component } from 'react'

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
              <li key={link.id}><a href={link.link} >{link.name}</a></li>
            ))
          }
          </ul>
      </nav>
    )
  }
}