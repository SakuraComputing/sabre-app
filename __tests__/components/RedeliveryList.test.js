import React from 'react';
import {mapStateToProps, RedeliveryList} from '../../src/components/RedeliveryList';
import { shallow, mount } from 'enzyme';
import redeliveries from "../fixtures/redeliveries";

describe('Redelivery List Component',() => {
   it('should render the form correctly',() => {
        const testComponent = shallow(<RedeliveryList redeliveries={redeliveries}/>);
        expect(testComponent).toMatchSnapshot();
   });
   it('should display no redeliveries when nothing is passed in',() => {
       const testComponent = shallow(<RedeliveryList redeliveries={[]}/>);
       expect(testComponent).toMatchSnapshot();

   });
    // it('maps state to props',() => {
    //     const currentState = {
    //         cardId: '',
    //         parcelId: '',
    //         latestScan: 0,
    //         requestDate: 0
    //     };
    //     const redeliveriesTest = {
    //         id: 1,
    //         cardId: '74747',
    //         parcelId: 'JD000',
    //         latestScan: 0,
    //         requestDate: 0
    //     };
    //     let state = {
    //         redeliveries: { redeliveriesTest },
    //         filters: currentState
    //     };
    //     expect(mapStateToProps(state).redeliveries).toEqual(state);
    // });
});


