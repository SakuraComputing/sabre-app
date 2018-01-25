import React from 'react';
import RedeliveryForm from '../../src/components/RedeliveryForm';
import { shallow } from 'enzyme';
import redeliveries from '../fixtures/redeliveries';
import moment from 'moment';

describe('Redelivery Form',() => {
    describe('Form inputs',() => {

        let wrapper;

        beforeEach(() => {
            wrapper = shallow(<RedeliveryForm/>);
        });
        it('should render the form correctly',() => {
            expect(wrapper).toMatchSnapshot();
        });
        it('should set card id on input form', () => {
            const value = '888888';
            wrapper.find('.card-id').simulate('change',
                { target: { value }
                });
            expect(wrapper.state('cardId')).toBe(value);
        });
        it('should not set a card id for and incorrect input', () => {
            const cardId = 'WRONG';
            wrapper.find('.card-id').simulate('change',
                { target: { cardId }
                });
            expect(wrapper.state('cardId')).toBeUndefined();
        });
        it('should set parcel id on input form', () => {
            const value = 'JD888888';
            wrapper.find('.parcel-id').simulate('change',
                { target: { value }
                });
            expect(wrapper.state('parcelId')).toBe(value);
        });
        it('should set latest scan', ()=> {
            const now = moment().format('YYYY-MM-DD');
            wrapper.find('.latest-scan').simulate('change', { target: { value: now }});
            expect(wrapper.state('latestScan')).toEqual( now );
        });
        it('should set the request date',()=> {
            const now = moment().format('YYYY-MM-DD');
            wrapper.find('.request-date').simulate("change", { target: { value: now }});
            expect(wrapper.state('requestDate')).toEqual( now );
        });
    });

    it('should render the form with data',() => {
        const wrapper = shallow(<RedeliveryForm redelivery={redeliveries[0]}/>);
        expect(wrapper).toMatchSnapshot();
    });

    describe('when the form is submitted',() => {
        it('should render an error when for an invalid form submission',() => {
            const wrapper = shallow(<RedeliveryForm />);
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {}
            });
            expect(wrapper.state('error').length).toBeGreaterThan(0);
            expect(wrapper).toMatchSnapshot();
        });
        it('should submit props for valid form submission',() => {
            const onSubmitSpy = jest.fn();
            const wrapper = shallow(<RedeliveryForm redelivery={redeliveries[0]} onSubmit={onSubmitSpy}/>)
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {}
            });
            expect(wrapper.state('error')).toBe('');
            expect(onSubmitSpy).toHaveBeenCalledWith({
                cardId: redeliveries[0].cardId,
                id: redeliveries[0].id,
                parcelId: redeliveries[0].parcelId,
                latestScan: moment(redeliveries[0].latestScan).format('YYYY-MM-DD'),
                requestDate: moment(redeliveries[0].requestDate).format('YYYY-MM-DD')
            });
        });
    });

});


