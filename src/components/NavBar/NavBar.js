import React from "react";
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import { Button } from "@mui/material";
import logo from '../../../src/assets/images/pets.svg';
import CartWidget from '../CartWidgets/CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <AppBar>

            <nav>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <div className="container-logo">

                        <img src={logo} alt="Logo del ecommerce" />
                        <h2 className="brand">PetHouse</h2>

                    </div>
                </Link>
                <div className="cart-container">
                    <ul>
                        <li>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <Button variant="contained">Home</Button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'} style={{ textDecoration: 'none' }}>
                                <Button variant="contained">Products</Button>
                            </Link>
                        </li>
                        <li>
                            <Button variant="contained">Contact</Button>
                        </li>
                        <li>
                            <Button variant="contained">About</Button>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </AppBar>
    )
}