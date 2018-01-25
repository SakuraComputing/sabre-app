import React from 'react';
import Address from "./Address";

const ParcelDetails = ({ parcel, address }) => (
    <table className='parcel-details' frameBorder="1">
        <tbody>
            <tr>Address:</tr>
            <tr className="address-details" >{address ? <Address address={address}/> : 'Address not found'}</tr>
            <tr>Service Code: {parcel.serviceCode}</tr>
        </tbody>
    </table>
);
export default ParcelDetails;
