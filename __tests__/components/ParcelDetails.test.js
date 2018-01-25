import React from 'react';
import { shallow } from 'enzyme';
import ParcelDetails from '../../src/components/ParcelDetails';

const parcel = {
    parcelId: "JD0002256504047335",
    addressNo: 1,
    serviceCode: "HOME24",
    latestScan: 1509494399,
    createdAt: 1506816000
};

const address = {
    addressNo: 1,
    addressName: "Alex Delarge",
    addressLine1: "Broadmoor",
    addressLine2: "",
    town: "Crowthorne",
    county: "Berkshire",
    telephone: "01344 77 3111"
};

describe('parcel details',() => {
    it('should render parcel and address',() => {
        const wrapper = shallow(<ParcelDetails parcel={parcel} address={address}/>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render parcel and display no address found',() => {
        const wrapper = shallow(<ParcelDetails parcel={parcel} />);
        const expenseSummaryField = wrapper.find('.address-details').text();
        expect(expenseSummaryField).toEqual('Address not found');
    });
});


