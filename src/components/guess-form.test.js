import React from 'react';
import { shallow, mount } from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
    it('renders without crashing', () => {
        shallow(<GuessForm />);
    })

    it('should dispatch onMakeGuess when the form is submitted', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = '10';
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    });
})