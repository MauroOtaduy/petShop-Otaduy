import './Item.css';

const Item = ({ name, price, stock }) => {

    return (
        <div >
            <p>Name : {name}</p>
            <p>Price : {price}</p>
            <p>Stock : {stock}</p>
        </div>
    )
}
export default Item;