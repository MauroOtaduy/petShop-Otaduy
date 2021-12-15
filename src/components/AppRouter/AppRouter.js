import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from '../NavBar/NavBar';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

export default function AppRouter() {

    return (
        <div>
            <NavBar />
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/product/:id" element={<ItemDetailContainer />} />
                </Routes>

            </BrowserRouter>

        </div>
    )
}