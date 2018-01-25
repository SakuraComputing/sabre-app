import React from 'react';
import { connect } from 'react-redux';
import RedeliveryItem from '../components/RedeliveryItem';
import selectRedeliveries from './../selectors/Redeliveries';

export const RedeliveryList = (props) => (
    <table>
        <tbody>
            <tr>
                <th>Card Id</th>
                <th>Parcel Id</th>
                <th>Address</th>
                <th>Latest Scan</th>
                <th>Request Date</th>
            </tr>
            {
                props.redeliveries.map((redelivery) => {
                    return <RedeliveryItem key={redelivery.id} {...redelivery}/>
                })
            }
        </tbody>
    </table>
);

export const mapStateToProps = (state) => {
    return {
        redeliveries: selectRedeliveries(state.redeliveries, state.filters)
    };
};

export default connect(mapStateToProps)(RedeliveryList);


