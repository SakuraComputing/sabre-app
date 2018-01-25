import React from 'react';

const Address = ( { address } ) => (
    <table className='address-panel'>
        <tbody>
            <tr>{address.addressName}</tr>
            <tr>{address.addressLine1}</tr>
            <tr>{address.addressLine2}</tr>
            <tr>{address.town}</tr>
            <tr>{address.county}</tr>
            <tr>{address.telephone}</tr>
        </tbody>
    </table>
);
export default Address;
