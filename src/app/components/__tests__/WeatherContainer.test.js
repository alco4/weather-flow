import React from 'react';
import WeatherContainer from '../WeatherContainer.js';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('WeatherContainer', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = mount(<WeatherContainer />);
    })
    it('should have a main div', () => {
        expect(wrapper.find('div#main')).toHaveLength(1);
    });
});
