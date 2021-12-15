import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({ data }) {

    const { name, price, stock, img, initial, description } = data
    return (
        <div className='list-item-detail'>


            <img className="item-detail-img" src={img} alt='foto producto' />
            <div className="item-detail-texto">
                <h2>{name}</h2>
                <h4>{description}</h4>
                <h3>Precio: ${price}</h3>

                <p>Stock: {stock}</p>
                <ItemCount stock={stock} initial={initial} />
            </div>



        </div >
    )


}