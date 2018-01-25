export const setCardId = (cardId = '') => ({
  type: 'SET_CARD_ID',
  cardId
});

export const setParcelId = ( parcelId = '') => ({
   type: 'SET_PARCEL_ID',
   parcelId
});

export const setPostCode = ( postCode = '') => ({
    type: 'SET_POST_CODE',
    postCode
});

export const setReqStartDate = ( startDate ) => ({
    type: 'SET_REQ_START_DATE',
    startDate
});

export const setReqEndDate = ( endDate ) => ({
    type: 'SET_REQ_END_DATE',
    endDate
});



