import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

const Header = () => (
    <div className='menu-container'>
        <Navbar className="navbar navbar-default navbar-static-top" >
            <ul>

                <li>
                    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/tracking" activeClassName="is-active">Parcel Tracking</NavLink>
                </li>
                <li>
                    <NavLink to="/redelivery" activeClassName="is-active">Redelivery</NavLink>
                </li>
            </ul>
        </Navbar>
        <h1>Yodel Web Portal</h1>
    </div>
);
export default Header;
