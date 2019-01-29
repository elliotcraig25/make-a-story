import React from 'react';

import MainSide from './MainSide/MainSide';
import MainContent from './MainContent/MainContent';

const mainBody = function(){
    return (
        <div className='main_body_div'>
            <MainContent />
            <MainSide />
        </div>
    );
};

export default mainBody;