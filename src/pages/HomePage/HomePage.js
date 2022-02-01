
import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";

const HomePage = () => {
    return (
        <div >
            <PhotoSlider />
            <ItemListContainer title="Productos destacados" />
        </div>
    )
}

export default HomePage