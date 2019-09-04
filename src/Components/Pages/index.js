import React, { Component } from 'react'

export default class index extends Component {

  state={
    title:"INDIA BLUE",
    tagline:"Bringing magical music to the human realm",
    aboutText:"India Blue has been making music since she possibly could. Having been classically trained on the piano from the age of 5 onwards, India found a passion for exploring her creativity on instruments, including the voice. Having self-taught herself every other instrument played since i.e.. harp, mandolin, guitar. \rAt 11 India began sharing songs at local concerts and also busking with friends, which lead to her winning the under 14’s category of the Equator music competition. A little later on, India became a finalist of the Young Songwriter of the year in 2015 and a few years after that an Area Finalist of Open Mic UK.\r Re-finding her love of the faeries and her pagan roots, India’s writing took on a more poetic story-telling fashion, similar to the likes of folk artists such as Joanna Newsom, Vashti Bunyan and Linda Perhacs, with an essence of eccentricism similar to Kate Bush. \rIndia has 5 years experience on the festival scene, performing at the likes of: Harlequin Fayre, Green Gathering, Small World (to name a few) and continues sharing magical music at festivals and events all over the country."
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
