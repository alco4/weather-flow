import React from 'react';
import WeatherForm from '../WeatherForm.js';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('WeatherForm', () => {
    var wrapper;
    beforeEach(() => {
        wrapper = shallow(<WeatherForm />);
    })
    it('should have an form', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
    it('should have a select with class form-control', () => {
        expect(wrapper.find('select.form-control')).toHaveLength(1);
    });
    it('should have a select with six options', () => {
        expect(wrapper.find('select option')).toHaveLength(6);
    });
});
