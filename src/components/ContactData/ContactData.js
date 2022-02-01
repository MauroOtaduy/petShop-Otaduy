import React, { useState } from 'react'
import db from "../../firebase"
import { collection, addDoc } from "@firebase/firestore"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SuccessfulOrder from '../SuccessfulOrder/SuccessfulOrder'
import { CircularProgress } from "@mui/material"
import Box from '@mui/material/Box';
import './ContactData.css'


export default function ContactData({ open, handleClose, products, total }) {
    const [openn, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);

    };
    const handleCloses = () => {
        setOpen(false);
    };


    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        mail: ''
    })
    const [loader, setLoader] = useState(false)
    const [orderId, setOrderId] = useState()
    const [order, setOrder] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const sendOrder = () => {
        setLoader(true)
        let order = {}
        order.buyer = formData
        order.items = products
        order.total = total
        setOrder(order)
        pushOrder(order)

    }

    const pushOrder = async (order) => {
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)


        if (order.id !== null) {
            setLoader(false)
            handleClickOpen()

        }
    }
    return (
        <div>
            {loader ? <CircularProgress /> :
                <div>
                    {orderId != null ? <SuccessfulOrder open={openn} orderId={orderId} handleCloses={handleCloses} /> :

                        <Dialog open={open} onClose={handleClose}>

                            <DialogContent >
                                <DialogContentText>
                                    Complete el formulario para finalizar la compra
                                </DialogContentText>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        '& > :not(style)': { m: 1 },
                                    }}
                                >
                                    <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange} />
                                    <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange} />
                                    <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} onChange={handleChange} />
                                </Box>
                            </DialogContent>
                            <DialogActions  >
                                <button variant="contained" onClick={handleClose} className="finish-order">Cancelar</button>
                                <button variant="outlined" onClick={sendOrder} className="finish-order">Finalizar Compra</button>
                            </DialogActions>

                        </Dialog>
                    }

                </div>

            }
        </div>

    )
}