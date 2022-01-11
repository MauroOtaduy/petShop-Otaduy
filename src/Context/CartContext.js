
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProducts = (product) => {
        let exists = products.indexOf(product)
        if (exists === -1) {
            setProducts([...products, product])
            setTotalPrice(totalPrice + product.price * product.quantity)
        }

    }

    const data = {
        products,
        addProducts,
        totalPrice
    }

    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext