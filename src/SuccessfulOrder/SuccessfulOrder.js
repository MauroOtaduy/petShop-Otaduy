import CartPage from '../CartPage/CartPage'

export default function SuccessfulOrder({ orderId }) {

    return (
        <>

            <h2>La transaccion se realizo exitosamente, a continuacion los detalles de su compra</h2>
            <h3>Orden de compra: ${orderId}</h3>

        </>
    )
}