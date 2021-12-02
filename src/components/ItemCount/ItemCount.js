import React, { useState, useEffect } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, initial, oNAdd }) => {

    const [itemCount, setItemCount] = useState(initial)
    const updateItem = () => {

        if (itemCount < stock) {
            setItemCount(itemCount + 1)

        }
    }


    const removeItem = () => {
        if (itemCount > initial) {
            setItemCount(itemCount - 1)

        }
    }

    const onAdd = () => {
        if (stock > initial && itemCount > initial) {
            setItemCount(initial)
            console.log(itemCount)

        }

    }


    return (
        <div className='itemCount-container'>
            <div className='itemCount-change'>
                <button className='button-itemCount' onClick={updateItem}>+</button>
                <h2 id='item-count'>{itemCount}</h2>
                <button className='button-itemCount' onClick={removeItem}>-</button>
            </div>
            <button className='button-itemCount' onClick={onAdd}>Agregar al carrito</button>

        </div>
    )
}

export default ItemCount;