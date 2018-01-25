import filtersReducer from '../../src/reducers/filters';
import moment from 'moment';

describe('filter reducer tests',() => {
   it('should return a default value',() => {
       const state = filtersReducer(undefined, { type: '@@INIT'});
       expect(state).toEqual({
           cardId: '',
           parcelId: '',
           startDate: 0,
           endDate: 0
       });
   });
   it('should set the card id',() => {
       const state = filtersReducer( undefined, { type: 'SET_CARD_ID', cardId: '999999'});
       expect(state.cardId).toBe('999999');
   });
   it('should set the parcel Id',() => {
       const state = filtersReducer( undefined, { type: 'SET_PARCEL_ID', parcelId: 'JD0002789567434563'});
       expect(state.parcelId).toBe('JD0002789567434563');
   });
    it('should set the request start date',() => {
        const state = filtersReducer( undefined, { type: 'SET_REQ_START_DATE', startDate: 0});
        expect(state.startDate).toBe(0);
    });

    it('should set the request end date',() => {
        const state = filtersReducer( undefined, { type: 'SET_REQ_END_DATE', endDate: 0});
        expect(state.endDate).toBe(0);
    });

});