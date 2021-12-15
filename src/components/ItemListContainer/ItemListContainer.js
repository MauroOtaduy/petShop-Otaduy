
import './ItemListContainer.css';
import { CircularProgress, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import Item from "../Item/Item"
import cucha from '../../../src/assets/images/cucha.jpg';
import pechera from '../../../src/assets/images/pechera.jpg';
import torre from '../../../src/assets/images/torre.jpg';
import torre2 from '../../../src/assets/images/torre2.jpg';

const ItemListContainer = () => {
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])

    const productsList = [
        {
            id: 1,
            name: 'Cucha pequeña',
            price: 2000,
            stock: 10,
            img: cucha,
            initial: 0

        },
        {
            id: 2,
            name: 'Torre de felpa',
            price: 2000,
            stock: 10,
            img: torre,
            initial: 0

        },
        {
            id: 3,
            name: 'Torre Anillo felpa',
            price: 2000,
            stock: 10,
            img: torre2,
            initial: 0

        },
        {
            id: 4,
            name: 'Pechera Mediana',
            price: 2000,
            stock: 10,
            img: pechera,
            initial: 0


        }
    ]

    const getProductsList = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsList)
        }, 2000)
    })

    useEffect(() => {
        getProductsList.then((data) => {
            setProducts(data)
            setLoader(false)
        })
    })
    return (
        <div className='list-container'>
            <h2>Productos Destacados</h2>

            <div className='item-container'>
                {
                    loader ? <CircularProgress /> :

                        <Grid container spacing={2}>
                            {products.map(product => {
                                return (
                                    <Grid item xs={3} key={product.id}>
                                        <Item data={product} />

                                    </Grid>
                                )


                            })}

                        </Grid>
                }
            </div>


        </div>

    )
}

export default ItemListContainer;