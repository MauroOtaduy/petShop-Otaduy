import './Item.css';
import ItemCount from '../ItemCount/ItemCount'


const Item = ({ data }) => {
    const { name, price, stock, img, initial } = data
    return (
        <div className='list'>
            <div className='item' >

                <img src={img} alt='foto producto' />
                <h2>{name}</h2>
                <h3>Precio: ${price}</h3>

                <p>Stock: {stock}</p>

            </div>
            <ItemCount stock={stock} initial={initial} />

        </div >
    )
}
export default Item;