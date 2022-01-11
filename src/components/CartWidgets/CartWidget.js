import React, { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import CartContext from '../../Context/CartContext';
import ModalCart from '../ModalCart/ModalCart';

const CartWidget = () => {
    const [showCart, setShowCart] = useState(false)
    const { products, totalPrice } = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    return (
        <div className="cart-container">
            <ShoppingCartIcon style={{ fill: "black" }} onClick={openCart} />
            {showCart && <ModalCart products={products} total={totalPrice} />}
        </div>
    )
}

export default CartWidget