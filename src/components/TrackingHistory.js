import React from 'react';
import TrackingItem from './TrackingItem';

export const TrackingHistory = ({tracks}) => (

    <div>
        <h3>Parcel Tracking History</h3>

        <table className="tracking-history">
            <tbody>
                <tr>
                    <th>Status</th>
                    <th>Track Date</th>
                    <th>Service Centre</th>
                    <th>Tour</th>
                    <th>Comment</th>
                </tr>
                    {
                        (tracks.map((track) => {
                            return <TrackingItem key={track.trackDate} {...track} />;
                        }))
                    }
            </tbody>
        </table>
    </div>
);

export default TrackingHistory;