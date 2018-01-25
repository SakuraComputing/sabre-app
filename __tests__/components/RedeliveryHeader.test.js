import React from 'react';
import { shallow } from 'enzyme';
import { RedeliveryHeader, mapStateToProps, mapDispatchToProps } from '../../src/components/RedeliveryHeader';
import Redeliveries from '../fixtures/redeliveries';
import moment from 'moment';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');


let wrapper, setCardId, setParcelId, setRedeliveryData, setReqStartDate, setReqEndDate, fetch;

beforeEach(() => {
    const filters = {
        cardId: '',
        parcelId: '',
        latestScan: 0,
        requestDate: 0
    };
    setCardId = jest.fn();
    setRedeliveryData = jest.fn();
    setParcelId = jest.fn();
    setReqStartDate = jest.fn();
    setReqEndDate = jest.fn();
    wrapper = shallow(
           <RedeliveryHeader
                setCardId={setCardId}
                setParcelId={setParcelId}
                setRedeliveryData={setRedeliveryData}
                setReqStartDate={setReqStartDate}
                setReqEndDate={setReqEndDate}
                filters={filters}
            />
    );
});

describe('Redelivery Header',() => {
    it('should render the form correctly',() => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should handle on card id change',() => {
        const value = '99999';
        wrapper.find('#cardId').simulate('change', {
            target: { value }
        });
        expect(setCardId).toHaveBeenLastCalledWith(value);
    });
    it('should handle parcel Id change',() => {
       const value = 'JD0002';
       wrapper.find('.parcel-id').simulate('change', {
           target: {value}
       });
       expect(setParcelId).toHaveBeenCalledWith(value);
    });
    it('should handle on request start date',() => {
       const value = '01/01/11';
       wrapper.find('.request-start-date').simulate('change', {
           target: { value }
       });
       expect(setReqStartDate).toHaveBeenLastCalledWith(value);
    });
    it('should handle on request end date',() => {
        const value = '01/01/11';
        wrapper.find('.request-end-date').simulate('change', {
            target: { value }
        });
        expect(setReqEndDate).toHaveBeenLastCalledWith(value);
    });
    it('maps state to props',() => {
        const currentState = {
            cardId: '',
            parcelId: '',
            latestScan: 0,
            requestDate: 0
        };
        let state = {
            filters: currentState,
        };
        expect(mapStateToProps(state).filters).toEqual(state.filters);
    });

    describe('call to the fetch api',() => {
       it('should send a GET request', () => {

       });
    });
    describe('maps dispatch to props',() => {
        const mockDispatch = jest.fn();
        const actionProps = mapDispatchToProps(mockDispatch);

        it('should dispatch card id to props',() => {
            const cardId = '99999';
            actionProps.setCardId(cardId);
            expect(mockDispatch).toHaveBeenCalledWith({ cardId: cardId, type: 'SET_CARD_ID' });
        });
        it('should dispatch parcel id to props',() => {
            const parcelId = 'JD0002';
            actionProps.setParcelId(parcelId);
            expect(mockDispatch).toHaveBeenCalledWith({ parcelId: parcelId, type: 'SET_PARCEL_ID' });
        });
        it('should dispatch redelivery data to props',() => {
            const redeliveries = Redeliveries;
            actionProps.setRedeliveryData(Redeliveries);
            expect(mockDispatch).toHaveBeenCalledWith({ redeliveries: Redeliveries, type: 'SET_REDELIVERY_DATA'});
        });
        it('should dispatch start date to props',() => {
            const startDate = moment(0);
            actionProps.setReqStartDate(startDate);
            expect(mockDispatch).toHaveBeenCalledWith({ startDate: startDate, type: 'SET_REQ_START_DATE'});
        });
        it('should dispatch end date to props',() => {
            const endDate = moment(0);
            actionProps.setReqEndDate(endDate);
            expect(mockDispatch).toHaveBeenCalledWith({ endDate: endDate, type: 'SET_REQ_END_DATE'});
        });
    });
});

