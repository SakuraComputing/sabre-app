import React from 'react';
import { shallow } from 'enzyme';
import TrackingHistory from '../../src/components/TrackingHistory';

const tracks = [{
    status: "Out for Delivery",
    parcelId: "JD0002256504047335",
    trackDate: "5-11-2017",
    serviceCentre: "Borehamwood",
    tour: "BE45",
    comment: "On the van"
}];

describe('when tracking history renders',() => {
    test('it should render a single record correctly',() => {
        const wrapper = shallow(<TrackingHistory tracks={tracks}/>);
        expect(wrapper).toMatchSnapshot();
    });
});



