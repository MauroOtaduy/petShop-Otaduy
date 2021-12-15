import React, { useState } from 'react'
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
                <button className='button-itemCount text-count' onClick={removeItem}> <p >-</p> </button>
                <h2 id='item-count'>{itemCount}</h2>
                <button className='button-itemCount text-count' onClick={updateItem}> <p>+</p></button>
            </div>
            <button className='button-itemCount' onClick={onAdd}> <p >Agregar al carrito </p> </button>

        </div>
    )
}

export default ItemCount;