import React from 'react';
import './app.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from '../header/header';
import Posts from '../posts/posts';
import AboutUs from '../about-us/about-us';
import Contact from "../contact/contact";
import PostDetails from "../post-details/post-details";
import Home from "../home/home";

const App = () => {
    return (
        <Router>
            <div className="main">
                <Header/>
                <Route path='/' render={Home} exact/>
                <Route path='/posts' exact component={Posts}/>
                <Route path='/about-us' component={AboutUs}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/posts/:id' component={PostDetails}/>
            </div>
        </Router>
    )
};

export default App;

