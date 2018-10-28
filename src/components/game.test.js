import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
    it('should renders the game without crashing', () => {
        shallow(<Game />);
    });
});