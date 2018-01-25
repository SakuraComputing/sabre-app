import UrlConstants from '../../config/url-constants';
import uuid from 'uuid';

// ADD_REDELIVERY
export const addRedelivery = (
    {
        id = '',
        parcelId = '',
        addressNo = 0,
        cardId = '',
        latestScan = 0,
        requestDate = 0
    } = {}
) => ({
    type: 'ADD_REDELIVERY',
    redelivery: {
        id,
        parcelId,
        addressNo,
        cardId,
        latestScan,
        requestDate
    }
});

// CREATE_REDELIVERY
export const createRedelivery = (redelivery) => {
    return (dispatch) => {
        fetch(UrlConstants.REDELIVERIES_URL, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type':'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(
                {
                    id: uuid(),
                    cardId: redelivery.cardId,
                    parcelId: redelivery.parcelId,
                    addressNo: 1,
                    latestScan: redelivery.latestScan,
                    requestDate: redelivery.requestDate
                }
            )
        })
            .then( res => res.json())
            .then( redelivery => {
                dispatch(addRedelivery(redelivery));
            })
            .catch( error => console.log(error));
    }
};

//UPDATE REDELIVERY
export const updateRedelivery = (id, redelivery) => {
  return (dispatch) => {
      fetch(UrlConstants.REDELIVERY_ID + redelivery.cardId, {
          method: 'PUT',
          headers: {
              'Accept' : 'application/json',
              'Content-Type':'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(
              {
                  cardId: redelivery.cardId,
                  parcelId: redelivery.parcelId,
                  latestScan: redelivery.latestScan,
                  requestDate: redelivery.requestDate
              }
          )
      })
      .then( res => res.json())
      .then( redelivery => {
          dispatch(editRedelivery(id, redelivery));
      })
      .catch( error => console.log(error));
  }
};

// DELETE REDELIVERY
export const deleteRedelivery = ( id ) => {
  return (dispatch) => {
      fetch(REDELIVERY_URL + this.props.redelivery.cardId, {
          method: 'DELETE',
          headers: {
              'Accept' : 'application/json',
              'Content-Type':'application/json'
          },
          mode: 'cors',
          cache: 'default',
          body: JSON.stringify(
              {
                  cardId: this.props.redelivery.cardId
              }
          )
      })
      .then( res => {
          if (res.ok)
              return res.json()
      })
      .then( data => {
          dispatch(removeRedelivery( id ));
      })
      .catch( error => console.log(error));
  }
};


// REMOVE_REDELIVERY
export const removeRedelivery = ({ id }) => ({
    type: 'REMOVE_REDELIVERY',
    id
});

// EDIT_REDELIVERY
export const editRedelivery = (id, updates) => ({
    type: 'EDIT_REDELIVERY',
    id,
    updates
});

export const setUpRedeliveryData = (redeliveries) => ({
    type: 'SET_REDELIVERY_DATA',
    redeliveries
});

