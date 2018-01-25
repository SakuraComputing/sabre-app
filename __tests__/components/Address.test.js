import React from 'react';
import { shallow } from 'enzyme';
import Address from '../../src/components/Address';

const address = {
    addressNo: 1,
    addressName: "Alex Delarge",
    addressLine1: "Broadmoor",
    addressLine2: "",
    town: "Crowthorne",
    county: "Berkshire",
    telephone: "01344 77 3111"
};

describe('Address component',() => {
   it('should render correctly',() => {
      const wrapper = shallow(<Address address={address}/>)
      expect(wrapper).toMatchSnapshot();
   });
});