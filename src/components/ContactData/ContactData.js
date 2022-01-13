import React, { useState } from 'react'
import db from "../../firebase"
import { collection, addDoc } from "@firebase/firestore"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SuccessfulOrder from '../../SuccessfulOrder/SuccessfulOrder'
import { CircularProgress } from "@mui/material"

export default function ContactData({ open, handleClose, products, total }) {

    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        mail: ''
    })
    const [loader, setLoader] = useState(false)
    const [orderId, setOrderId] = useState()

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
        pushOrder(order)

    }

    const pushOrder = async (order) => {
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)
        if (order.id !== null) {
            setLoader(false)
        }
    }
    return (
        <div>
            {loader ? <CircularProgress /> :
                <div>

                    {orderId != null ? <SuccessfulOrder orderId={orderId} /> :

                        <Dialog open={open} onClose={handleClose}>

                            <DialogContent>
                                <DialogContentText>
                                    Complete el formulario para finalizar la compra
                                </DialogContentText>
                                <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange} />
                                <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange} />
                                <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} onChange={handleChange} />

                            </DialogContent>
                            <DialogActions>
                                <Button variant="contained" onClick={handleClose}>Cancelar</Button>
                                <Button variant="contained" onClick={sendOrder}>Finalizar Compra</Button>
                            </DialogActions>

                        </Dialog>
                    }

                </div>

            }
        </div>

    )
}