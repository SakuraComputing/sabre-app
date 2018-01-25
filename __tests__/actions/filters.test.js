import React from 'react'
import { setCardId, setParcelId, setPostCode, setReqStartDate, setReqEndDate } from '../../src/actions/filters';


describe('filters action', () => {
    describe('on the card id object',() => {
        it('should set a value passed in',() => {
            const action = setCardId('999999');
            expect(action).toEqual = ({
                type: 'SET_CARD_ID',
                cardId: '999999'
            })
        });
        it('should set a default when no value passed in',() => {
            const action = setCardId();
            expect(action).toEqual = ({
                type: 'SET_CARD_ID',
                cardId: ''
            })
        });
    });
   describe('on the parcel id object',() => {
       it('should set a value passed in',() => {
           const action = setParcelId('JD0002');
           expect(action).toEqual = ({
               type: 'SET_PARCEL_ID',
               parcelId: 'JD0002'
           })
       });
       it('should set a default when no value passed in',() => {
           const action = setParcelId();
           expect(action).toEqual = ({
               type: 'SET_PARCEL_ID',
               parcelId: ''
           })
       });
   });
   describe('on the postcode object', () => {
       it('should set a value passed in', () => {
           const action = setPostCode('L34AE');
           expect(action.toEqual = ({
               type: 'SET_POST_CODE',
               postCode: 'L3$AE'
           }))
       });
       it('should set default when no value passed in',() => {
           const action = setPostCode();
           expect(action.toEqual = ({
               type: 'SET_POST_CODE',
               postCode: ''
           }))
       })
   });
   it('should set a request start date object', () => {
       const action = setReqStartDate(0);
       expect(action.toEqual = ({
           type: 'SET_REQ_START_DATE',
           startDate: 0
       }))
   });
   it('should set a request end date object', () => {
       const action = setReqEndDate(0);
       expect(action.toEqual = ({
           type: 'SET_REQ_END_DATE',
           startDate: 0
       }))

   });

});

