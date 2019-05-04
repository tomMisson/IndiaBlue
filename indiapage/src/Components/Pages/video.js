import React, { Component } from 'react'

export default class video extends Component {

  state={
    linksToRender:[
      {id:0, name:"Synchronicity Hotel - India Blue (recorded at Semuc Champey Guatemala)",url:"https://www.youtube.com/embed/gCBhs8vhlTM"},
      {id:1, name:"Blood Red River - Beth Orton cover // (*India Blue*)", url:"https://www.youtube.com/embed/0udHYYcRQEk"},
      {id:2, name:"Veil",url:"https://www.youtube.com/embed/uCLeEleH0o0"},
      {id:3, name:"Samhain", url:"https://www.youtube.com/embed/WDR46wXGeGI"},
      {id:4, name:"Rosemary - Suzanne Vega cover by India Blue",url:"https://www.youtube.com/embed/uGgqfVc6eR4"},
      {id:5, name:"It's cool we can still be friends - Bright Eyes cover by India Blue",url:"https://www.youtube.com/embed/wCd4Yba08Z0"}
    ]
  }

  render() {
    return (
      <main>
        <br/>
          <h1>Music</h1>
          <div className="videos">
          {
            this.state.linksToRender.map(
              (link) => <iframe key={link.id} title={link.name} width="600" height="337.50" src={link.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )
          }
          <iframe style={{border: "0", width: "600px", height: "720px"}} src="https://bandcamp.com/EmbeddedPlayer/album=4003996753/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" seamless><a href="http://indiablue.bandcamp.com/album/india-blue-live-at-small-world">India Blue Live at Small World by IndiaBlue</a></iframe>
          </div>
      </main>
    )
  }
}
