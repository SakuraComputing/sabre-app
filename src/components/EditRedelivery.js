import React from 'react';
import { connect } from 'react-redux';
import { updateRedelivery, deleteRedelivery} from '../actions/redelivery';
import RedeliveryForm from './RedeliveryForm';
import UrlConstants from "../../config/url-constants";

const REDELIVERY_URL = UrlConstants.REDELIVERY_ID;

export class EditRedelivery extends React.Component {

    onSubmit = (redelivery) => {
        this.props.updateRedelivery(this.props.redelivery.id, redelivery);
        this.props.history.push('/redelivery');
    };

    onDelete = (id) => {
        this.props.deleteRedelivery( this.props.cardId);
        this.props.history.push('/redelivery');
    };

    render() {
        return (
            <div>
                <h2>Edit Redelivery</h2>
                <RedeliveryForm
                    redelivery={this.props.redelivery}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onDelete}>
                    Delete Redelivery
                </button>
            </div>
        );
    }
}

export const mapStateToProps = ( state, props ) => ({
   redelivery: state.redeliveries.find((redelivery) => {
       return redelivery.cardId === props.match.params.id;
   })
});

export const mapDispatchToProps = (dispatch) => ({
    updateRedelivery: (id, redelivery) => dispatch(updateRedelivery(id, redelivery)),
    deleteRedelivery: (data) => dispatch(deleteRedelivery(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditRedelivery);
