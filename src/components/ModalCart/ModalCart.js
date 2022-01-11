import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import './ModalCart.css'
export default function ModalCart({ products, total }) {

    return (
        <div className={`box-cart active`}>
            {products.length === 0 ? (
                <h2>Sin productos</h2>
            ) : (
                <div>
                    {products.map((product) => {
                        return (
                            <div className='list-cart' key={product.id}>
                                <div className='img-cart'>
                                    <img src={`../assets/${product.img}`} />
                                </div>
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <span>Cant: {product.quantity}</span>
                            </div>
                        )
                    })}
                    <div className=''>
                        <p>Total: $ {total}</p>
                        <Link to='/cart'> <Button>Realizar compra</Button></Link>
                    </div>
                </div>
            )}

        </div>
    )
}