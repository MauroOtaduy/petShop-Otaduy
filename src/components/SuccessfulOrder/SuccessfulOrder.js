import React, { useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom'
import './SuccessfulOrder.css'

export default function SuccessfulOrder({ open, orderId, handleCloses }) {
    const { clean } = useContext(CartContext)
    const emptyCart = () => {
        handleCloses()
        clean()

    };

    return (
        <>
            <Dialog open={open} onClose={handleCloses}>

                <DialogContent >
                    <DialogContentText>
                        <h2>La transaccion se realizo exitosamente</h2>
                        <h3>Su ID de operación: ${orderId}</h3>
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <button variant="contained" onClick={emptyCart} id="end-transaction">Salir</button>
                    </Link>
                </DialogActions>

            </Dialog>

        </>
    )
}