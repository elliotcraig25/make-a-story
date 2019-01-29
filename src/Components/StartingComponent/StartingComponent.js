import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import Header from './Header/Header';
import MainBody from './MainBody/MainBody';

class StartingComponent extends Component {
    render(){
        return (
            <div className='starting_component_div'>
                <Header />
                <MainBody />
            </div>
        );
    };
};

export default StartingComponent;