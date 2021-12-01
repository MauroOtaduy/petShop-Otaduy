import Item from '../Item/Item';
import './ItemListContainer.css';

const ItemListContainer = () => {
    const products = [
        {
            name: 'Pantalon 1',
            price: 2000,
            stock: 10,

        },
        {
            name: 'Pantalon 2',
            price: 2300,
            stock: 5,

        }
    ]
    return (
        <div className='list-container'>
            <h2>Productos Destacados</h2>

            <div className='item-container'>
                {products.map((product) => {
                    return (
                        <div className='item-position'>
                            <Item name={product.name} price={product.price} stock={product.stock} />
                        </div>
                    )
                })}
            </div>


        </div>

    )
}

export default ItemListContainer;