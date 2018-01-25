import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const RedeliveryItem = ({ cardId, parcelId, addressNo, latestScan, requestDate}) =>  (
    <tr className="redelivery-item">
        <td>
            <NavLink to={`/redelivery/${cardId}`} activeClassName="is-active">
                {cardId}
            </NavLink>
        </td>
        <td>{parcelId}</td>
        <td>{addressNo}</td>
        <td>{moment(latestScan).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
        <td>{moment(requestDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
    </tr>
);

export default RedeliveryItem;