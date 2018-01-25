import React from 'react';
import { shallow } from 'enzyme';
import RedeliveryHistory from '../../src/components/RedeliveryDashboard';

describe('Redelivery History',() => {
    it('should render the form correctly',() => {
        const wrapper = shallow(<RedeliveryHistory/>);
        expect(wrapper).toMatchSnapshot();
    })
});


