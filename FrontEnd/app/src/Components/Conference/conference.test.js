import React from 'react';
import { shallow } from 'enzyme';
import Conference from './Conference';
describe("Conference", () => {
    it("Should render Conference", () => {
        const wrapper = shallow(<Conference />);
    });
});