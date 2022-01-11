import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CartContext from '../../Context/CartContext';


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

        itemCart.quantity = value

    }

    const sendItem = () => {
        console.log("itemCart: ", products)
        addProducts(itemCart)
    }
    return (
        <div className='list-item-detail'>
            <ThemeProvider >

                <img className="item-detail-img" src={`../assets/${data.img}`} alt='foto producto' />
                <div className="item-detail-texto">
                    <h2>{data.name}</h2>
                    <h3>Precio: ${data.price}</h3>
                    <p>Stock: {data.stock}</p>
                    <ItemCount stock={data.stock} onAdd={onAdd} />
                    <button onClick={sendItem}>
                        Comprar
                    </button>
                </div>


            </ThemeProvider>
        </div >
    )


}