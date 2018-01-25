import React from 'react';
import { shallow } from 'enzyme';
import { EditRedelivery } from '../../src/components/EditRedelivery';
import redeliveries from '../fixtures/redeliveries';
import {mapDispatchToProps} from "../../src/components/EditRedelivery";

describe('edit redelivery page', () => {

    let wrapper, updateRedelivery, deleteRedelivery, history;

    beforeEach(() => {
        updateRedelivery = jest.fn();
        deleteRedelivery = jest.fn();
        history = { push: jest.fn() };
        wrapper = shallow(<EditRedelivery
            updateRedelivery={updateRedelivery}
            deleteRedelivery={deleteRedelivery}
            history={history}
            redelivery={redeliveries[2]}
        />);
    });

    it('should render the form correctly', () => {
      expect(wrapper).toMatchSnapshot();
   });
   it('should handle update redelivery', () => {
       wrapper.find('RedeliveryForm').prop('onSubmit')(redeliveries[2]);
       // expect(history.push).toHaveBeenCalledWith('/redelivery');
       // expect(editRedelivery).toHaveBeenCalledWith(redeliveries[2].id,redeliveries[2])
   });
    it('should handle removeRedelivery', () => {
        // wrapper.find('button').simulate('click');
        // expect(history.push).toHaveBeenLastCalledWith('/redelivery');
        // expect(removeRedelivery).toHaveBeenLastCalledWith({
        //     id: redeliveries[2].id
        // });
    });

    describe('maps dispatch to props',() => {
        const id = 1;

        it('should dispatch redelivery to props', () => {
            const redelivery = {
                id: 1,
                addressNo: 0,
                cardId: '99999',
                parcelId: 'JD000',
                latestScan: 0,
                requestDate: 0
            };
            const mockDispatchEdit = jest.fn();
            const actionProps = mapDispatchToProps(mockDispatchEdit);

            actionProps.updateRedelivery(id, redelivery);
            expect(mockDispatchEdit).toHaveBeenCalledTimes(1);
        });
        it('should dispatch remove redelivery',() => {
            const mockDispatchRemove = jest.fn();
            const actionProps = mapDispatchToProps(mockDispatchRemove);
            actionProps.deleteRedelivery(id);
            expect(mockDispatchRemove).toHaveBeenCalledTimes(1);
        });
    });
});
