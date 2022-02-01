import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext';
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import './RemoveButton.css'
const RemoveButton = (product) => {
    const { removeItem } = useContext(CartContext)

    console.log(product)

    const removeThisItem = () => {
        console.log('remove', product)
        removeItem(product)
    };

    return (

        <Button variant="outlined" startIcon={<DeleteIcon className='remove-button' />} color="error" onClick={removeThisItem} ></Button>

    )
}

export default RemoveButton