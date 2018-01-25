import moment from 'moment';

const defaultFilterState = {
        cardId: '',
        parcelId: '',
        // startDate: moment().startOf('month'),
        // endDate: moment().endOf('month')
        startDate: 0,
        endDate: 0
};
export default (state = defaultFilterState, action) => {
    switch(action.type) {
        case 'SET_CARD_ID':
            return {
                ...state,
                cardId: action.cardId
            };
        case 'SET_PARCEL_ID':
            return {
                ...state,
                parcelId: action.parcelId
            };
        case 'SET_REQ_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            };
        case 'SET_REQ_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    }
}


