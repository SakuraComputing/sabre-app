import redeliveryReducer from '../../src/reducers/redelivery';
import redeliveries from '../fixtures/redeliveries';

describe('Redelivery Reducer',() => {
    it('should set a default value',() => {
        const state = redeliveryReducer(undefined, { type: '@@INIT'});
        expect(state).toEqual([]);
    });
    it('should remove a redelivery by id',() => {
        const action = {
            type: 'REMOVE_REDELIVERY',
            id: redeliveries[0].id
        };
        const state = redeliveryReducer(redeliveries, action);
        expect(state).toEqual([redeliveries[1], redeliveries[2]])
    });
    it('should not remove an redelivery with an invalid id',() => {
        const action = {
            type: 'REMOVE_REDELIVERY',
            id: "nonsense"
        };
        const state = redeliveryReducer(redeliveries, action);
        expect(state).toEqual(redeliveries)
    });
    it('should add a redelivery',() => {
        const redelivery = {
            parcelId: "JD0002768545339022",
            addressNo: 5,
            cardId: '9676786',
            latestScan: 0
        };
        const action = {
            type: 'ADD_REDELIVERY',
            redelivery
        };
        const state = redeliveryReducer(redeliveries, action);
        expect(state).toEqual([...redeliveries, redelivery])

    });
    it('should edit a redelivery with a valid id', () => {
        const cardId = '99999';

        const action = {
            type: 'EDIT_REDELIVERY',
            id: redeliveries[1].id,
            updates: {
                cardId
            }
        };
        const state = redeliveryReducer(redeliveries, action);
        expect(state[1].cardId).toBe('99999');
    });
    it('should not edit a redelivery with an invalid id', () => {
        const cardId = '99999';
        const action = {
            type: 'EDIT_REDELIVERY',
            id: -1000,
            updates: {
                cardId
            }
        };
        const state = redeliveryReducer(redeliveries, action);
        expect(state).toEqual(redeliveries);
    });
    it('should set state to redelivery data', () => {
        const action = {
            type: 'SET_REDELIVERY_DATA',
            redeliveries: redeliveries
        };
        const state = redeliveryReducer(redeliveries, action);
        expect(state).toEqual(redeliveries);
    });
    describe('fetch method',() => {
        it('should post a redelivery',() => {
            const redelivery = {
                cardId: '768686',
                parcelId: 'JD000226764746474',
                addressNo: 9999,
                latestScan: 0,
                requestDate: 0
            }

        });

    });
});
