import React from "react";
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import { Button } from "@mui/material";
import logo from '../../../src/assets/images/pets.svg';
import CartWidget from '../CartWidgets/CartWidget';


export default function NavBar() {

    return (
        <AppBar>

            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo del ecommerce" />
                    <h2 className="brand">PetHouse</h2>
                </div>
                <div className="cart-container">
                    <ul>
                        <li><Button variant="contained">Home</Button></li>
                        <li><Button variant="contained">Products</Button></li>
                        <li><Button variant="contained">Contact</Button></li>
                        <li><Button variant="contained">About</Button></li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>
        </AppBar>
    )
}