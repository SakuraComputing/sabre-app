import { addRedelivery, editRedelivery, removeRedelivery, setUpRedeliveryData, createRedelivery } from '../../src/actions/redelivery';
import redeliveries from './../fixtures/redeliveries';
import UrlConstants from '../../config/url-constants';

describe('redelivery actions',() => {
    it('should setup remove redelivery action object when a valid id is passed in',() => {
        const action = removeRedelivery({ id: '123abc'});
        expect(action).toEqual({
            type: 'REMOVE_REDELIVERY',
            id: '123abc'
        })
    });
    it('should setup edit redelivery action object',() => {
        const action = editRedelivery('NMC123', { cardId: '678'} );
        expect(action).toEqual({
            type: 'EDIT_REDELIVERY',
            id: 'NMC123',
            updates: { cardId: '678' }
        })
    });
    const redelivery = {
            id: '1',
            parcelId: 'JD0002',
            addressNo: 1,
            cardId: '111',
            latestScan: 0,
            requestDate: 0
    };
    it('should setup add redelivery object with provided values',() => {
        const action = addRedelivery(redelivery);
        expect(action).toEqual({
            type: 'ADD_REDELIVERY',
            redelivery: {
                parcelId: 'JD0002',
                addressNo: 1,
                cardId: '111',
                latestScan: 0,
                requestDate: 0,
                id: expect.any(String)
            }
        })
    });
    it('should setup add redelivery with default values',() => {
        const action = addRedelivery();
        expect(action).toEqual({
            type: 'ADD_REDELIVERY',
            redelivery: {
                parcelId: '',
                addressNo: 0,
                cardId: '',
                latestScan: 0,
                requestDate: 0,
                id: expect.any(String)
            }
        })
    });
    it('should setup Redelivery Data with provided values',() => {
       const action = setUpRedeliveryData(redeliveries);
       expect(action).toEqual({
            type: 'SET_REDELIVERY_DATA',
            redeliveries: (redeliveries)
       });
    });

    // it('should setup create redelivery with provided values', () => {
    //    const action = createRedelivery(redelivery);
    //    expect(action).toEqual({
    //        redelivery: {
    //            parcelId: 'JD0002',
    //            addressNo: 1,
    //            cardId: '111',
    //            latestScan: 0,
    //            requestDate: 0,
    //            id: expect.any(String)
    //        }
    //    })
    // });
});


