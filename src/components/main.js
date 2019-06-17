import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Resume from "./resume";
import About from "./about_me";
import Projects from "./projects";
import Contact from "./contact";


const Main = props => {

    return (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/resume" exact component={ Resume } />
            <Route path="/about" exact component={ About } />
            <Route path="/projects" exact component={ Projects } />
            <Route path="/contact" exact component={ Contact } />
        </Switch>
    )
};

export default Main;
