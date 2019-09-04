import React, { Component } from 'react'

export default class event extends Component {
  state={
    events:[
      {id: 0, Date:"9th August", Name: "North Devon Firefly Festival"},
      {id: 1, Date:"16th August", Name:"Whirl-y-Fayre Festival"},
      {id: 2, Date:"23rd August", Name:"Maui Waui Festival"},
      {id: 3, Date:"6th September", Name:"Mad Hatters Affair"},
      {id: 4, Date:"28th September", Name:"Essex Faery Fayre"}
    ]
  }
  render() {
    return (
    <main>
      <br/>
        <h1>Events</h1>
        <ul>
        {
            this.state.events.map((event) => (
              <li key={event.id}>{event.Name} - {event.Date}</li>
            ))
        }
        </ul>
    </main>
    )
  }
}
