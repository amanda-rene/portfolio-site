import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import Projects from './Components/Projects'

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
    </Switch>
)