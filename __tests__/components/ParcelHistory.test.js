import React from 'react';
import {configure, shallow} from 'enzyme';
import ParcelHistory from '../../src/components/ParcelHistory';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('ParcelHistoryTests', () => {

    let testComponent;

    beforeEach(() => {
        testComponent = shallow(<ParcelHistory/>);
    });

    it('should render Parcel History correctly', () => {
        expect(testComponent).toMatchSnapshot();
    });

    it('should return an error when no parcel number is entered', () => {
        testComponent.find('form').simulate('submit', {
            preventDefault: () => {
            }
        });
        expect(testComponent.state('error').length).toBeGreaterThan(0);
        expect(testComponent).toMatchSnapshot();
    });

    it('should set the state to all clear',() => {
        // testComponent.find('form').simulate('clear');
        let mockPreventDefault = jest.fn();
        let mockEvent = {preventDefault: mockPreventDefault};
        testComponent.instance().onClear(mockEvent);
        expect(testComponent.state()).toEqual({"error": null, "parcelId": "", "selectedParcel": "", "selectedTracks": "", "selectedAddress": ''});
    });

    it('should set the state onChange to parcel id', () => {
        let mockEvent = {target: {name: 'parcelId', value: null}};
        let parcelId = 'ParcelID';
        mockEvent.target['value'] = parcelId;
        testComponent.instance().onParcelChange(mockEvent);
        expect(testComponent.state().parcelId).toEqual(parcelId);
    });

    describe('onSubmit is executed', () => {
        let mockPreventDefault = jest.fn();
        let mockEvent = {preventDefault: mockPreventDefault};

        it('should prevent the default event from firing', () => {
            testComponent.instance().onSubmit(mockEvent);
            expect(mockPreventDefault).toHaveBeenCalled();
        });
        it('should display an error when no parcel selected',() => {
            testComponent.setState({ parcelId: ''});
            testComponent.instance().onSubmit(mockEvent);
            expect(testComponent.state().error).toBe('Please provide a parcel Id');
        });
        it('should display as error when parcel is not found',() => {
           testComponent.setState({ parcelId: '123456789012'});
            testComponent.instance().onSubmit(mockEvent);
            expect(testComponent.state().error).toBe('parcel not found');
        });
        it('should find tracks for a valid parcel',() => {
            testComponent.setState({ parcelId: 'JD0002256504047335'});
            testComponent.instance().onSubmit(mockEvent);
            expect(testComponent.state('selectedTracks').length).toBeGreaterThan(0);
        });
        it('should validate the parcel field',() => {
            testComponent.setState({parcelId: 'wibble'});
            testComponent.instance().onSubmit(mockEvent);
            expect(testComponent.state().error).toBe('Parcel must be between 12 and 35 chars');
        });
    });
});


