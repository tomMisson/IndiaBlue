import React, { Component } from 'react'

export default class contact extends Component {


  render() {
    return (
    <main>
        <br/>
        <h1>Contact</h1>

        <form action="">
                <input type="text" name="forename" placeholder="Forename"/>
                <input type="text" name="surname" placeholder="Surname"/>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea type="text" name="message" placeholder="Your message"/>
                <input type="submit" value="Send it ➤" className="sendButton"/>
                
            </form>
    </main>
    )
  }
}
