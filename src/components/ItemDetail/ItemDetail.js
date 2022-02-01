import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import Container from '@mui/material/Container';
import CartContext from '../../Context/CartContext';
import { Button } from "@mui/material";
export default function ItemDetail({ data }) {

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
        console.log("1-itemcart de itemdetal: ", itemCart.quantity)
        itemCart.quantity = value + 1
    }

    const sendItem = () => {
        console.log("itemCart: ", products)
        if (itemCart.quantity !== 0) {
            addProducts(itemCart)
        }
    }
    return (

        <Container >
            <div className='list-item-detail'>
                <img className="item-detail-img" src={`../assets/${data.img}`} alt='foto producto' />
                <div className="item-detail-texto">
                    <h2>{data.name}</h2>
                    <h3>Precio: ${data.price}</h3>
                    <p>Stock: {data.stock}</p>
                    <ItemCount stock={data.stock} onAdd={onAdd} />
                    <Button className='list-detail-button' variant="outlined" onClick={sendItem}>Agregar al carrito</Button>
                </div>

            </div>
        </Container>

    )


}