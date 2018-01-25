import React from 'react';
import RedeliveryHeader from './RedeliveryHeader';
import RedeliveryList from './RedeliveryList';
import { NavLink } from 'react-router-dom';

const RedeliveryDashboard = () =>(
    <header>
        <h2>Redeliveries</h2>
        <p></p>
        <NavLink to="/create" activeClassName="is-active">Add Redelivery</NavLink>
        <div>
            <RedeliveryHeader/>
            <RedeliveryList />
        </div>

    </header>
);
export default RedeliveryDashboard;


