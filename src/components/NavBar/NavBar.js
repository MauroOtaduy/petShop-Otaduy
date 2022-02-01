import React from 'react'
import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import { Button } from "@mui/material";
import logo from '../../../src/assets/images/pets.svg';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidgets/CartWidget";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListIcon from '@mui/icons-material/List';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

    };

    return (
        <div id="nav-respon" >
            <AppBar style={{ backgroundColor: 'rgba(255, 255, 255,0.9)' }}>
                <nav>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <div className="container-logo" >

                            <img src={logo} alt="Logo del ecommerce" />
                            <h2 className="brand">PetHouse</h2>

                        </div>
                    </Link>
                    <input type="checkbox" id="menu-button" />
                    <label for="menu-button"> <ListIcon id='listIcon' /> </label>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to={'/'} style={{ textDecoration: 'none' }}>
                                    <Button variant="text" className='nav-button'>Home</Button>
                                </Link>
                            </li>
                            <li>


                                <div>
                                    <Button
                                        variant="text"
                                        className='nav-button'
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        Products
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                        style={{ background: 'none' }}
                                    >
                                        <Link to={'/products'} style={{ textDecoration: 'none' }}>
                                            <MenuItem className='menu-items-nav' onClick={handleClose}>Todos</MenuItem>
                                        </Link>
                                        <Link to={'/Torres'} style={{ textDecoration: 'none' }}>
                                            <MenuItem className='menu-items-nav' onClick={handleClose}>Torres</MenuItem>
                                        </Link>
                                        <Link to={'/Pecheras'} style={{ textDecoration: 'none' }}>
                                            <MenuItem className='menu-items-nav' onClick={handleClose}>Pecheras</MenuItem>
                                        </Link>
                                        <Link to={'/Cuchas'} style={{ textDecoration: 'none' }}>
                                            <MenuItem className='menu-items-nav' onClick={handleClose}>Cuchas</MenuItem>
                                        </Link>
                                    </Menu>
                                </div>


                            </li>
                            <li>
                                <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                                    <Button variant="text" className='nav-button'>Contact</Button>
                                </Link>
                            </li>
                            <li>
                                <Button variant="text" className='nav-button'>About</Button>
                            </li>
                        </ul>
                        <CartWidget className="logo-cart" />
                    </div>

                </nav>


            </AppBar>
        </div >
    )
}