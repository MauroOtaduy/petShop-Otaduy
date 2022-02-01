import React, { useContext, useState } from 'react'
import Container from '@mui/material/Container';
import CartContext from '../../Context/CartContext';
import ContactData from '../../components/ContactData/ContactData';
import './CartPage.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CartPage() {

    const { products, totalPrice } = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <h2 id="order-title"> Resumen de pedido </h2>
            <Container className='container-cart-page'>

                <ContactData open={open} handleClose={handleClose} products={products} total={totalPrice} />
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table" align="center">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{ display: { xs: 'none', md: 'block' } }}><h3>Imagen</h3></TableCell>
                                <TableCell align="center"><h3>Producto</h3></TableCell>
                                <TableCell align="center"><h3>Cantidad</h3></TableCell>
                                <TableCell align="center"><h3>Precio</h3></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow
                                    key={product.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >


                                    <TableCell align="center" sx={{ display: { xs: 'none', md: 'block' } }}><img src={`../assets/${product.img}`} alt="img" /></TableCell>
                                    <TableCell align="center">{product.name}</TableCell>
                                    <TableCell align="center">{product.quantity}</TableCell>
                                    <TableCell align="center">{product.price}</TableCell>
                                </TableRow>
                            ))}


                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='final-table'>
                    <div className='final-table-total'>
                        <h3>Total: </h3>
                        <h3> $ {totalPrice}</h3>
                    </div>
                    <button onClick={handleClickOpen} id='button-cart-page'>Comprar</button>
                </div>
            </Container>

        </>
    )
}