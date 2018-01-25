import React from 'react';
import moment from 'moment';

export default class RedeliveryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.redelivery ? props.redelivery.id : '',
            cardId: props.redelivery ? props.redelivery.cardId : '',
            parcelId: props.redelivery ? props.redelivery.parcelId : '',
            latestScan: props.redelivery ? moment(props.redelivery.latestScan).format('YYYY-MM-DD') : undefined,
            requestDate: props.redelivery ? moment(props.redelivery.requestDate).format('YYYY-MM-DD') : undefined,
            error: ''
        }
    }

    onCardIdChange = (e) => {
      const cardId = e.target.value;
      if (!cardId || cardId.match(/\d/)) {
          this.setState(() => ({ cardId }));
      };
    };
    onParcelIdChange = (e) => {
      const parcelId = e.target.value;
      this.setState(() => ({ parcelId }));
    };
    onLatestDateChange = (e) => {
      const latestScan = e.target.value;
      this.setState(() => ({ latestScan }));
    };

    onRequestDateChange = (e) => {
        const requestDate = e.target.value;
        this.setState(() => ({ requestDate }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.cardId && !this.parcelId) {
            this.setState(() => ({ error: 'A parcel or card id must be input'}));
        }  else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                id: this.state.id,
               cardId: this.state.cardId,
               parcelId: this.state.parcelId,
               latestScan: this.state.latestScan,
               requestDate: this.state.requestDate
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.onSubmit} >
                    <input
                        type="text"
                        className="card-id"
                        value={this.state.cardId}
                        placeholder="Card Id"
                        onChange={this.onCardIdChange}
                    />
                    <input
                        type="text"
                        className="parcel-id"
                        value={this.state.parcelId}
                        placeholder="Parcel Id"
                        onChange={this.onParcelIdChange}
                    />
                    <input
                        type="date"
                        className="latest-scan"
                        value={this.state.latestScan}
                        placeholder="Latest Scan"
                        onChange={this.onLatestDateChange}
                    />
                    <input
                        type="date"
                        className="request-date"
                        value={this.state.requestDate}
                        placeholder="Request Date"
                        onChange={this.onRequestDateChange}
                    />
                    <button>Save Redelivery</button>
                </form>
            </div>
        )
    }

}
