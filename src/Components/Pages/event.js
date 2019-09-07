import React, { Component } from 'react'

export default class event extends Component {
  state={
    events:[
      {id: 0, Date:"6th September", Name:"Mad Hatters Affair"},
      {id: 1, Date:"14th September", Name:"Canterbury Mystical Market"},
      {id: 2, Date:"21st September", Name:"Slaughtered Lamb London (support for RISE)"},
      {id: 3, Date:"28th September", Name:"Essex Faery Fayre"},
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
