import React from 'react';
import { connect } from 'react-redux';
import RedeliveryForm from './RedeliveryForm';
import { createRedelivery } from "../actions/redelivery";
import UrlConstants from '../../config/url-constants';

export class AddRedelivery extends React.Component {
    onSubmit = (redelivery) => {
      this.props.createRedelivery(redelivery);
      this.props.history.push(UrlConstants.REDELIVERY_HOME);
    };
    render() {
        return (
            <div>
                <h2>Add Redelivery</h2>
                <RedeliveryForm
                    onSubmit = {this.onSubmit}
                />
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => ({
    createRedelivery: (redelivery) => dispatch(createRedelivery(redelivery))
});
export default connect(undefined, mapDispatchToProps)(AddRedelivery);