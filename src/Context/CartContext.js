
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("productos")) || [])
    const [totalPrice, setTotalPrice] = useState(0)
    const [cleanCart, setCleanCart] = useState([])

    const addProducts = (product) => {
        let exist = products.indexOf(product)
        if (exist === -1 && product.quantity > 0) {
            setProducts([...products, product])
            addProductStorage(product)
            setTotalPrice(totalPrice + product.price * product.quantity)


        } else if (product.quantity > 0) {

            console.log("El producto ya existe ", product)
            console.log("La cantidad existente ", products[exist].quantity)
            console.log("La cantidad agregada ", product.quantity)
            products[exist].quantity += product.quantity
            setTotalPrice(totalPrice + product.price * product.quantity)
        }
    }

    const addProductStorage = (product) => {
        localStorage.setItem("productos", JSON.stringify([...products, product]))

    }
    const removeItem = (item) => {
        let find = products.find(prod => prod === item.item)
        if (find !== -1) {
            let product = products[find]
            console.log('Resultado IndexOf', product)
            setTotalPrice(totalPrice - find.price * find.quantity)
            products.splice(find, 1);
            localStorage.removeItem("productos", JSON.stringify(find))
        }

    }
    const clean = () => {
        setCleanCart([])
        if (cleanCart.length === 0) {
            setProducts(cleanCart)
            setTotalPrice(0)
            localStorage.clear()

        }
    }

    const data = {
        products,
        addProducts,
        totalPrice,
        clean,
        removeItem

    }

    return (
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext