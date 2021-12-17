import { useEffect, useState } from "react"
import cucha from '../../../src/assets/images/cucha.jpg';
import torre from '../../../src/assets/images/torre.jpg';
import { useParams } from "react-router";
import ItemCategory from "../ItemCategory/ItemCategory";
import { CircularProgress, Grid } from "@mui/material"
import './Categories.css';

const Categories = () => {
    const { id } = useParams()
    const [loader, setLoader] = useState(true)
    const [categories, setcategory] = useState([])

    const dataCategories = [
        {
            id: 1,
            name: 'Cuchas',
            img: cucha,

        },
        {
            id: 2,
            name: 'Torres ',
            img: torre,

        }

    ]

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataCategories)
        }, 2000)
    })

    useEffect(() => {
        getProduct.then((data) => {
            setcategory(data)
            setLoader(false)
        })

    })
    return (
        <div className='list-category'>
            <div >
                <h2>Categorías</h2>
            </div>

            {
                loader ? <CircularProgress /> :

                    <Grid container className='item-category'>
                        {categories.map(product => {
                            return (
                                <Grid item key={product.id}>
                                    <ItemCategory data={product} />

                                </Grid>
                            )


                        })}

                    </Grid>
            }



        </div>


    )
}
export default Categories