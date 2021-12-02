import './Item.css';
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ name, price, stock, initial }) => {

    return (
        <div >
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <p>Stock : {stock}</p>
            <ItemCount stock={stock} initial={initial} />
        </div>
    )
}
export default Item;