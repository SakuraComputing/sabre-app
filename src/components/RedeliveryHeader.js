import React from 'react';
import { connect } from 'react-redux';
import {setCardId, setParcelId, setReqStartDate, setReqEndDate} from '../actions/filters';
import {setUpRedeliveryData} from '../actions/redelivery';
import UrlConstants from '../../config/url-constants';

export class RedeliveryHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardId: '',
            parcelId: '',
            latestScan: undefined,
            requestDate: undefined
        }
    }

    onCardIdChange = (e) => {
        this.props.setCardId(e.target.value);
    };

    onParcelIdChange = (e) => {
        this.props.setParcelId(e.target.value);
    };

    onSetReqStartDate = (e) => {
        this.props.setReqStartDate((e.target.value));
    };

    onSetReqEndDate = (e) => {
        this.props.setReqEndDate((e.target.value));
    };

    getRedeliveries = () => {
        fetch(UrlConstants.REDELIVERIES_URL)
            .then(data => data.json())
            .then(data => {
                this.props.setRedeliveryData(data)
            });
    };

    componentDidMount() {
        this.getRedeliveries();
    }

    render() {
        return (

            <div>
                <form className="select">
                    <p></p>
                    <p></p>
                    <label>Card Id</label>
                    <input
                           id="cardId"
                           type="text"
                           className="card-id"
                           value={this.props.filters.cardId}
                           onChange={this.onCardIdChange}
                           placeholder="Card Id"
                    />
                    Parcel Id:
                    <input
                        type="text"
                        className='parcel-id'
                        value={(this.props.filters.parcelId)}
                        onChange={this.onParcelIdChange}
                        placeholder="Parcel Id"
                    />
                    Request Date:
                    <input
                        className={'request-start-date'}
                        type="date"
                        value={(this.props.filters.startDate)}
                        onChange={this.onSetReqStartDate}
                        placeholder="Request Date"
                    />
                    <input
                        className={'request-end-date'}
                        type="date"
                        value={(this.props.filters.endDate)}
                        onChange={this.onSetReqEndDate}
                    />
                </form>
                <p></p>
            </div>
        )
    }
}
export const mapStateToProps = (state) => ({
    filters: state.filters
});

export const mapDispatchToProps = (dispatch) => ({
    setCardId: (cardId) => dispatch(setCardId(cardId)),
    setParcelId: (parcelId) => dispatch(setParcelId(parcelId)),
    setReqStartDate: (startDate) => dispatch(setReqStartDate(startDate)),
    setReqEndDate: (endDate) => dispatch(setReqEndDate(endDate)),
    setRedeliveryData: (redeliveries) => dispatch(setUpRedeliveryData(redeliveries))
});

export default connect(mapStateToProps, mapDispatchToProps)(RedeliveryHeader);