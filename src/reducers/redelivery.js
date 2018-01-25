const redeliveryReducerDefaultState = [];
export default (state = redeliveryReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_REDELIVERY':
            return [
                ...state,
                action.redelivery
            ];
        case 'REMOVE_REDELIVERY':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_REDELIVERY':
            return state.map((redelivery) => {
                if (redelivery.id === action.id) {
                    return {
                        ...redelivery,
                        ...action.updates
                    };
                } else {
                    return redelivery;
                }
            });
        case 'SET_REDELIVERY_DATA':
            return action.redeliveries;

        default:
            return state;
    }
};