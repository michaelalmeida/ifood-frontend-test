import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

import { findByTestAttr, checkProps } from '../../test/testUtils';

const defaultProps = { isAuth: false };

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Header {...setupProps} />);
};

describe('<Header /> Rendering components on Header component based on isAuth prop', () => {
    test('renders without error', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'component-header');
        expect(component.length).toBe(1);
    });

    test('when isAuth is false, not rendiring filterBar', () => {
        const wrapper = setup({ isAuth: false });

        const componentHeader = findByTestAttr(wrapper, 'component-header');
        expect(componentHeader.length).toBe(1);

        const componentFilterBar = findByTestAttr(wrapper, 'component-render-filterbar');
        expect(componentFilterBar.length).toBe(0);
    });

    test('when isAuth is true, it must rendiring filterBar', () => {
        const wrapper = setup({ isAuth: true });

        const componentFilterBar = findByTestAttr(wrapper, 'component-render-filterbar');
        expect(componentFilterBar.length).toBe(1);

        const componentHeader = findByTestAttr(wrapper, 'component-header');
        expect(componentHeader.length).toBe(0);
    });

    test('Does not throw warning with expected props', () => {
        const expectedProps = { isAuth: true };
        checkProps(Header, expectedProps);
    });
});
