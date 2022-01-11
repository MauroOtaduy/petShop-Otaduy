import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [itemCount, setItemCount] = useState(0)
    const updateItem = () => {

        if (itemCount < stock) {
            setItemCount(itemCount + 1)
            onAdd(itemCount + 1)
        }
    }
    const removeItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1)
            onAdd(itemCount - 1)
        }
    }

    return (
        <div className='itemCount-container'>
            <div className='itemCount-change'>
                <button className='button-itemCount text-count' onClick={removeItem}> <p >-</p> </button>
                <h2 id='item-count'>{itemCount}</h2>
                <button className='button-itemCount text-count' onClick={updateItem}> <p>+</p></button>
            </div>
        </div>
    )
}

export default ItemCount;