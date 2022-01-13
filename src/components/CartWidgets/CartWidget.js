import React, { useState, useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const CartWidget = () => {
    const [showCart, setShowCart] = useState(false)
    const { products, totalPrice } = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    return (
        <div className="cart-container">
            <ShoppingCartIcon style={{ fill: "black" }} onClick={openCart} />
            {showCart && <div className={`box-cart active`}>
                {products.length === 0 ? (
                    <h2>Sin productos</h2>
                ) : (
                    <div>
                        {products.map((product) => {
                            return (
                                <div className='list-cart' key={product.id}>
                                    <div className='img-cart'>
                                        <img src={`../assets/${product.img}`} />
                                    </div>
                                    <p>{product.name}</p>
                                    <p>${product.price}</p>
                                    <span>Cant: {product.quantity}</span>
                                </div>
                            )
                        })}
                        <div className=''>
                            <p>Total: $ {totalPrice}</p>
                            <Link to='/cart' style={{ textDecoration: 'none' }}> <Button variant="contained" onClick={openCart} >Realizar compra</Button></Link>
                        </div>
                    </div>
                )}

            </div>}
        </div>
    )
}

export default CartWidget