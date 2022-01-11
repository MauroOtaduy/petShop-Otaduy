import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from '../NavBar/NavBar';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from '../../Context/CartContext'


export default function AppRouter() {

    return (
        <div>

            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/products/:id' element={<ItemDetailContainer />} />
                        <Route path='/:category/' element={<ItemListContainer />} />
                        <Route path='/' element={<ItemListContainer />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>

        </div>
    )
}