import Item from '../Item/Item';
import './ItemListContainer.css';


const ItemListContainer = () => {

    const products = [
        {
            name: 'Comida Gato',
            price: 2000,
            stock: 10,

        },
        {
            name: 'Comida Perro',
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
                            <Item name={product.name} price={product.price} stock={product.stock} initial={0} />

                        </div>
                    )
                })}
            </div>


        </div>

    )
}

export default ItemListContainer;