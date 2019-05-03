import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';

import Index from './Components/Pages/index';
import Video from './Components/Pages/video';
import Events from './Components/Pages/event';
import Contact from './Components/Pages/contact';

export default class App extends React.Component {

    state={
        internalLinks:[
            {id:0, name:"Home", link:"/", component:Index},
            {id:1, name:"Video", link:"/video", component:Video},
            {id:2, name:"Event", link:"/event", component:Events},
            {id:3, name:"Contact", link:"/contact", component:Contact},
        ],
    }

  render() {
    return (
    <body>  
        <Router>
            <header>
                {
                    this.state.internalLinks.map((link) =>
                    <Link to={link.link} key={link.id}>{link.name}</Link>
                    )
                }
            </header>


      
            <Switch>
                {
                    this.state.internalLinks.map((link) =>
                        <Route path={link.link} exact component={link.component} />
                    )
                }
            </Switch>
        

            <footer>

            </footer>
        </Router>
    </body>
    )
  }
}

