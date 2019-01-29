import React from 'react';

import StartingComponent from './Components/StartingComponent/StartingComponent'

import {Switch, Route} from 'react-router-dom';

export default (
    <Switch>
        <Route component={StartingComponent} exact path='/'/>
    </Switch>
)