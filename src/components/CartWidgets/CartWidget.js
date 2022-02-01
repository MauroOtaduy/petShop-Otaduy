import React, { useState, useContext } from 'react'
import './CartWidget.css'
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import RemoveButton from '../../components/RemoveButton/RemoveButton';
import DeleteIcon from '@mui/icons-material/Delete';

const CartWidget = () => {
    const [showCart, setShowCart] = useState(false)
    const { products, totalPrice } = useContext(CartContext)
    const { clean } = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const emptyCart = () => {
        clean()
    };


    return (
        <div >
            <ShoppingCartIcon className='logo-cart' aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} />

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem className='cart-widget-item' variant='outlined' onClick={handleClose}>{products.length === 0 ? (
                    <h2>Sin productos</h2>
                ) : (
                    <div className='cart-content'>
                        <h3>Mis productos</h3>
                        {products.map((product) => {
                            return (
                                <div>
                                    <div className='list-cart' key={product.id}>
                                        <div className='img-cart'>
                                            <img src={`../assets/${product.img}`} />
                                        </div>
                                        <p>Cant: {product.quantity}</p>
                                        <p>${product.price * product.quantity}</p>
                                        <RemoveButton item={product} />
                                    </div>

                                </div>
                            )
                        })}
                        <div className='cart-action'>
                            <p><strong> Total: </strong>$ {totalPrice}</p>
                            <Link to='/cart' style={{ textDecoration: 'none' }}> <Button className='cart-action-button' variant="outlined" onClick={openCart} >Realizar compra</Button></Link>
                            <Button className='cart-action-button' variant="outlined" startIcon={<DeleteIcon id='clear-button' />} onClick={emptyCart} >Vaciar carrito</Button>
                        </div>
                    </div>
                )}</MenuItem>

            </Menu>
        </div >
    );

}

export default CartWidget