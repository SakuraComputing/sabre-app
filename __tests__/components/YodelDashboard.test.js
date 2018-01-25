import React from 'react';
import YodelDashboard from '../../src/components/YodelDashboard';
import { shallow } from 'enzyme';

describe('Yodel Dashboard',() => {
   it('should render correctly',() => {
     const wrapper = shallow(<YodelDashboard/>);
     expect(wrapper).toMatchSnapshot();
   });
});

