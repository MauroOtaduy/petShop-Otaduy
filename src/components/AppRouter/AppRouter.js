import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NavBar from '../NavBar/NavBar';
import { CartProvider } from '../../Context/CartContext'
import CartPage from "../../pages/CartPage/CartPage";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailPage from "../../pages/ItemDetalPage/ItemDetalPage";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import ProductsCategories from "../../pages/ProductsCategories/ProductsCategories";
export default function AppRouter() {

    return (
        <div>

            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/products' element={<ItemListContainer title='Todos nuestros productos' />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/products/:id' element={<ItemDetailPage />} />
                        <Route path='/:category' element={<ProductsCategories />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </CartProvider>
                <Footer />
            </BrowserRouter>

        </div >
    )
}