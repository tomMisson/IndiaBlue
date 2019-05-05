import React from 'react';
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

import './App.css';
import logo from './Media/logo dark.png';
import facebook from './Media/Social/facebook.png';
import twitter from './Media/Social/twitter.png';
import youtube from './Media/Social/youtube.png';
import soundcloud from './Media/Social/soundcloud.png';
import bandcamp from './Media/Social/bandcamp.png';

import Index from './Components/Pages/index';
import Video from './Components/Pages/video';
import Events from './Components/Pages/event';
import Contact from './Components/Pages/contact';

import DrawToggleButton from './Components/Navigation/DrawToggleButton';
import SideDraw from './Components/Navigation/SideDrawer';
import Backdrop from './Components/Backdrop';

export default class App extends React.Component {

    state={
        internalLinks:[
            {id:0, name:"Home", link:"/", component:Index},
            {id:1, name:"Music", link:"/music", component:Video},
            {id:2, name:"Event", link:"/event", component:Events},
            {id:3, name:"Contact", link:"/contact", component:Contact},
        ],
        sideDrawerOpen:false,
        socialLinks:[
            {id:0, name: "Facebook", link:"https://www.facebook.com/IndiaBlueMusic", image:facebook},
            {id:1, name: "Twitter", link:"https://twitter.com/IndiaBlueMusic", image:twitter},
            {id:2, name: "Youtube", link:"https://www.youtube.com/user/IndiaBlueMusic", image:youtube},
            {id:3, name: "Soundcloud", link:"https://soundcloud.com/indiabluemusic", image:soundcloud},
            {id:4, name: "Bandcamp", link:"https://indiablue.bandcamp.com/", image:bandcamp},
        ]

    }

    drawToggleClickHandler = () =>{
    this.setState((prevState)=> {return{sideDrawerOpen: !prevState.sideDrawerOpen}});
    };

    backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
    };    

       
    render() {
        let backdrop;
        if(this.state.sideDrawerOpen)
        {
            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        return (
        <div>  
            <BrowserRouter>
                <header className="toolbar">
                    <nav className="toolbar_nav">
                        <div className = "toolbar_toggle_button"> 
                            <DrawToggleButton click={this.drawToggleClickHandler}/>
                        </div>
                        <div className = "toolbar_logo">
                            <Link to="/"><img alt ="logo" src={logo} height="50" width="300"/></Link>
                        </div>
                        <div className="spacer"></div>
                        <div className = "toolbar_navigation_items">
                            <ul>
                            {
                                this.state.internalLinks.map((link) =>
                                <li key={link.id}><Link to={link.link}>{link.name} </Link></li>
                                )
                            }
                            </ul>
                        </div>
                    </nav>
                </header>
                <Switch className="content">
                    {
                        this.state.internalLinks.map((link) =>
                            <Route key={link.id} path={link.link} exact component={link.component} />
                        )
                    }
                </Switch>
                <footer>
                    <div className="socialLinks">
                    {
                        this.state.socialLinks.map((link) =>
                            <a key={link.id} href={link.link}><img src={link.image} alt={link.name} width="64" height="64" style={{padding:"8px"}}/></a>
                        )
                    }
                    </div>
                </footer>
                <SideDraw show ={this.state.sideDrawerOpen} sideLinks={this.state.internalLinks}/>
                {backdrop}
            </BrowserRouter>
        </div>
        )
    }
}

