
import { Link } from 'react-router-dom';
import '../Categories/Categories.css';

export default function ItemCategory({ data }) {

    const { name, id, img } = data
    return (
        <div >

            <Link to={`/categories/${name}`} style={{ textDecoration: 'none' }}>
                <img src={img} alt='foto producto' />
            </Link>
            <div >
                <h2>{name}</h2>

            </div>



        </div >
    )


}