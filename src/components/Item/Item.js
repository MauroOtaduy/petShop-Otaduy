import './Item.css';
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useContext } from 'react'
import CartContext from '../../Context/CartContext';


const Item = ({ data }) => {
    const { name, price, stock, img, id } = data
    const { addProducts, products } = useContext(CartContext)
    const [itemCart, setItemCart] = useState(
        {
            name: data.name,
            id: data.id,
            price: data.price,
            img: data.img,
            quantity: 0
        }
    )
    const onAdd = (value) => {
        itemCart.quantity = value + 1
    }

    const sendItem = () => {
        console.log("itemCart: ", products)
        if (itemCart.quantity !== 0) {
            addProducts(itemCart)
        }
    }
    return (
        <div className='list'>
            <div className='item' >
                <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
                    <img src={`../../assets/${img}`} alt='foto producto' />
                </Link>
                <h2>{name}</h2>
                <h3>Precio: ${price}</h3>
                <p>Stock: {stock}</p>
            </div>
            <ItemCount stock={stock} onAdd={onAdd} />
            <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
                <Button className='detail-button' variant="text" > Ver detalles</Button>
            </Link>
            <Button className='add-button-cart' variant="text" onClick={sendItem}>Agregar al carrito</Button>

        </div >
    )
}
export default Item;