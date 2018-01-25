import React from 'react';
import moment from 'moment';

const TrackingItem = ({ status, trackDate, serviceCentre, tour, comment } ) => (
    <tr>
        <td>{status}</td>
        <td>{moment(trackDate).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
        <td>{serviceCentre}</td>
        <td>{tour}</td>
        <td>{comment}</td>
    </tr>
);

export default TrackingItem;

