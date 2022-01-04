import React from 'react';
import {
    Link,
} from "react-router-dom"
import './abhibus.scss'
import abhibusLogo from '../../imgs/abhibuslogo.png';

export default function Navbar() {
    return (
        <div>
            <header class="header d-flex justify-content-around align-items-center">
                <img src={abhibusLogo} alt="abhibus logo" width="100" height="50" />
                <nav class="nav-option d-none d-md-block">
                    <Link to="/offers">Offers</Link>
                    <Link to="/">Bus</Link>
                    <Link to="/trains">Trains</Link>
                    <Link to="/hotels">Hotels</Link>
                    <Link to="/mybookings">My Bookings</Link>

                    <i class="far fa-user-circle"></i>
                    <Link to="/login">Login/Register</Link>
                </nav>
                <span class="d-block d-md-none">
                    <i class="fas fa-align-justify"></i>
                </span>
            </header>
            <hr />
        </div>
    )
}
