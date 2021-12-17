import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from '../NavBar/NavBar';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Categories from "../Categories/Categories";

export default function AppRouter() {

    return (
        <div>

            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/:name" element={<Categories />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}