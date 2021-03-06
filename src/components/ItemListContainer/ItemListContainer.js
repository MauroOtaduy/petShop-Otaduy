
import './ItemListContainer.css';
import { CircularProgress, Grid } from "@mui/material"
import React, { useEffect, useState } from 'react'
import Item from "../Item/Item"
import db from '../../firebase'
import { collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ title }) => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const { category } = useParams()


    async function getProducts(db) {
        const productosCol = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => {
            let producto = doc.data()
            producto.id = doc.id
            return producto
        });
        return productosList;

    }

    useEffect(() => {
        getProducts(db).then((resultsProducts) => {
            if (category) {
                setProducts([])
                console.log(resultsProducts)
                resultsProducts.filter(resultProduct => {
                    if (resultProduct.category === category) {
                        console.log('La categoria es: ', category)
                        setProducts(products => [...products, resultProduct])

                    }

                })
                setLoader(false)
            }
            else {
                setProducts(resultsProducts)
                setLoader(false)
            }
        })
    }, [category])

    return (
        <div className='list-container'>
            <h2 className='list-container-title'>{category ? category : title}</h2>
            <div className='item-container'>
                {
                    loader ? <CircularProgress /> :

                        <div className='items-prod'>
                            {products.map(product => {
                                return (
                                    <div key={product.id}>
                                        <Item data={product} />

                                    </div>
                                )

                            })}

                        </div>
                }
            </div>


        </div>

    )
}

export default ItemListContainer;