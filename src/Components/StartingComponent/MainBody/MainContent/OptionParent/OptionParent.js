import React from 'react';

import OptionA from './OptionA/OptionA';
import OptionB from './OptionB/OptionB';
import OptionC from './OptionC/OptionC';

const OptionParent = function(){
    return (
        <div className='option_parent_div'>
            <OptionA />
            <OptionB />
            <OptionC />
        </div>
    );
};

export default OptionParent;