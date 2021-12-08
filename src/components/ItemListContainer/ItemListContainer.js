
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';


const ItemListContainer = () => {

    return (
        <div className='list-container'>
            <h2>Productos Destacados</h2>

            <div className='item-container'>
                <ItemList />
            </div>


        </div>

    )
}

export default ItemListContainer;