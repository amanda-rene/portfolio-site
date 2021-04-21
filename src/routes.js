import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'

export default(
    <Switch>
        {/* <Route exact path='/home' component={Home}/> */}
        <Route path='/about' component={About}/>
    </Switch>
)