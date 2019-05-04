import React, { Component } from 'react'

export default class index extends Component {

  state={
    title:"INDIA BLUE",
    tagline:"Bringing magical music to the human realm",
    aboutText:"With an array of instruments and a unique voice similar to the likes of Kate Bush and Joanna Newson, my songs are haunting yet soothing. To date, I have played at events like The Sussex Faerie Festival, Green Gathering, Small World and the Mystical Markets. I was also a runner up in the 2015 Young Songwriter of the Year and attended the Area Finals of Open Mic UK."
  }

  render() {
    return (
      <main>
        <div className="jumbotron">
            <h1>{this.state.title}</h1>
            <p>{this.state.tagline}</p>
        </div>
          
        <div className="about-me">
          <h2>About Me</h2>
          <p>{this.state.aboutText}</p>
        </div>
      </main>
    )
  }
}
