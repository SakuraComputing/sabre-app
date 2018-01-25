import React from 'react';
import { shallow } from 'enzyme';
import TrackingItem from '../../src/components/TrackingItem';

const track = {
    status: "Out for Delivery",
    parcelId: "JD0002256504047335",
    trackDate: 1510834763,
    serviceCentre: "Borehamwood",
    tour: "BE45",
    comment: "On the van"
};

describe('when tracking item renders',() => {
    test('it should render a single record correctly',() => {
        const wrapper = shallow(<TrackingItem tracks={track}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
