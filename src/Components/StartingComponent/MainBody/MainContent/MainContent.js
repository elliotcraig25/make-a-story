import React from 'react';

import OptionParent from './OptionParent/OptionParent';
import DisplayParent from './DisplayParent/DisplayParent';

const MainContent = function(){
    return (
        <div className='main_content_div'>
            <DisplayParent />
            <OptionParent />
        </div>
    );
};

export default MainContent;