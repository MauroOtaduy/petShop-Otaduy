import { useParams } from "react-router"
import React, { useEffect } from 'react'
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

const ProductsCategories = () => {
    const { category } = useParams()
    useEffect(() => {
    }, [category])
    return (

        <ItemListContainer />
    )
}

export default ProductsCategories