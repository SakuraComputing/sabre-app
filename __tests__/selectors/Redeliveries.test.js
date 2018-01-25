import moment from 'moment';
import selectorRedeliveries from '../../src/selectors/Redeliveries';
import redeliveries from '../fixtures/redeliveries';

describe('redeliveries selector test',() => {
   it('should filter by card id',() => {
       const filters = {
           cardId: '8',
           parcelId: '',
           startDate: undefined,
           endDate: undefined
       };
       const result = selectorRedeliveries(redeliveries, filters);
       expect(result).toEqual([redeliveries[0], redeliveries[1]])
   });
    it('should filter by parcel id', () => {
        const filters = {
            cardId: '',
            parcelId: 'JD0002289756470',
            startDate: undefined,
            endDate: undefined
        };
        const result = selectorRedeliveries(redeliveries, filters);
        expect(result).toEqual([redeliveries[1], redeliveries[2]])
    });
    it('should filter by request start date',() => {
        const filters = {
            cardId: '',
            parcelId: '',
            startDate: moment(0).add(41, 'years'),
            endDate: undefined
        };
        const result = selectorRedeliveries(redeliveries, filters);
        expect(result).toEqual([redeliveries[1], redeliveries[2]])
    });
    it('should filter by request end date',() => {
        const filters = {
            cardId: '',
            parcelId: '',
            startDate: undefined,
            endDate: moment(0).add(41, 'years')
        };
        const result = selectorRedeliveries(redeliveries, filters);
        expect(result).toEqual([redeliveries[0], redeliveries[1]])
    });

});

