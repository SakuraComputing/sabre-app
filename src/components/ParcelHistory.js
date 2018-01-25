import React from 'react';
import parcelData from '../../data/parcel.json';
import trackData from '../../data/tracks.json';
import addressData from '../../data/address.json';
import ParcelDetails from "./ParcelDetails";
import TrackingHistory from "./TrackingHistory";

class ParcelHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {parcelId: '', error: '', selectedParcel: '', selectedTracks: '', selectedAddress: ''};
    }

    onSubmit = (e) => {
        e.preventDefault();

        let parcelId = this.state.parcelId;
        if (parcelId) {
            if(this.onValidate()) {
                const selectedParcel = parcelData["parcels"].find(parcel => parcel.parcelId === parcelId);
                if (selectedParcel) {
                    let addressNo = selectedParcel.addressNo;
                    var selectedAddress = addressData["addresses"].find(address => address.addressNo === addressNo);
                    var selectedTracks = trackData["tracks"].filter(track => track.parcelId === parcelId);
                }
                let error = selectedParcel ? null : 'parcel not found';

                this.setState(() => ({
                    selectedParcel: selectedParcel,
                    error: error,
                    selectedTracks: selectedTracks,
                    selectedAddress: selectedAddress
                }));
            }
        } else {
            this.setState(() => ({ error: 'Please provide a parcel Id' }));
        }
    };

    onParcelChange = (e) => {
        const parcelId = e.target.value;
        this.setState(() => ({ parcelId }));
    };

    onClear = () => {
        this.setState(()=> ({ parcelId: '', error: null, selectedParcel: '', selectedTracks: '', selectedAddress: '' }))
    };

    onValidate = (e) => {
        let parcelId = this.state.parcelId;
        let formIsValid = true;

        if(parcelId.length < 12 || parcelId.length > 35) {
            this.setState(() => ({ error: 'Parcel must be between 12 and 35 chars' }));
            formIsValid = false
        }
        return formIsValid;
    }
    ;

    render() {
        let id = 'parcelId';
        return (
            <div>
                <form className="quick-form" onSubmit={this.onSubmit} >
                    <h2>Parcel History</h2>
                    <div className="search-bar">
                        Parcel Id:
                        <input
                            onChange={this.onParcelChange}
                            name={id}
                            id={id}
                            value={this.state.parcelId}
                            placeholder="Parcel Id"
                        />
                        <button className="submit-button">
                            Search
                        </button>
                        <button type="reset" className="clear-button" onClick={this.onClear}>
                            Clear Search
                        </button>
                    </div>
                    {this.state.selectedParcel ? <ParcelDetails parcel={this.state.selectedParcel} address={this.state.selectedAddress}/> : ''}
                    {this.state.selectedTracks ? <TrackingHistory tracks={this.state.selectedTracks} /> : ''}
                </form>
                {this.state.error && <div className="error-message">{this.state.error}</div>}
            </div>
        )
    };
};
export default ParcelHistory;

