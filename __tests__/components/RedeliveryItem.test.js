import React from 'react';
import { shallow } from 'enzyme';
import RedeliveryItem from '../../src/components/RedeliveryItem';

const redeliveryItem = {
  cardId: '999999',
  parcelId: 'JD0002567834521111',
  addressNo: 5,
  latestScan: 1511264704
};

describe('Redelivery Item Component',() => {
    it('should render the form correctly',() => {
        const wrapper = shallow(<RedeliveryItem redeliveryItem={redeliveryItem}/>);
        expect(wrapper).toMatchSnapshot();
    })
});