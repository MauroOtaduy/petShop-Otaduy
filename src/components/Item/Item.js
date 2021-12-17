import './Item.css';
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Item = ({ data }) => {
    const { name, price, stock, img, initial, id } = data
    return (
        <div className='list'>
            <div className='item' >
                <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                    <img src={img} alt='foto producto' />

                </Link>
                <h2>{name}</h2>
                <h3>Precio: ${price}</h3>

                <p>Stock: {stock}</p>


                <Button variant="contained">
                    <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>

                        Detalles


                    </Link>

                </Button>


            </div>
            <ItemCount stock={stock} initial={initial} />

        </div >
    )
}
export default Item;