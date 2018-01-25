import React from 'react';
import { shallow } from 'enzyme';
import { AddRedelivery, mapDispatchToProps } from '../../src/components/AddRedelivery';
import redeliveries from '../fixtures/redeliveries';

let createRedelivery, history, wrapper;

describe('Add Redelivery',() => {

    beforeEach(() => {
        createRedelivery = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(
                <AddRedelivery
                    createRedelivery={createRedelivery}
                    history={history}
                    redeliveries={redeliveries}
                    onSubmit={jest.fn()}
                />
        )
    });
    it('should render the add redelivery form',() => {
       expect(wrapper).toMatchSnapshot();
    });
    it('should handle on submit', () => {
       wrapper.find('RedeliveryForm').prop('onSubmit')(redeliveries[1]);
       expect(history.push).toHaveBeenLastCalledWith('/redelivery');
       expect(createRedelivery).toHaveBeenLastCalledWith(redeliveries[1]);
    });
    describe('maps dispatch to props',() => {
        const mockDispatch = jest.fn();
        const actionProps = mapDispatchToProps(mockDispatch);

        it('should dispatch new redelivery to props', () => {
            const redelivery = {
                id: 1,
                addressNo: 0,
                cardId: '99999',
                parcelId: 'JD000',
                latestScan: 0,
                requestDate: 0
            };
            actionProps.createRedelivery(redelivery);
            expect(mockDispatch).toHaveBeenCalledTimes(1);
        });
    });
});

