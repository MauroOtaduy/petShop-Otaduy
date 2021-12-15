import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import torre2 from '../../../src/assets/images/torre2.jpg';
import ItemDetail from '../ItemDetail/ItemDetail'
import cucha from '../../../src/assets/images/cucha.jpg';
import pechera from '../../../src/assets/images/pechera.jpg';
import torre from '../../../src/assets/images/torre.jpg';
import { useParams } from "react-router";


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loader, setLoader] = useState(true)
    const [product, setProduct] = useState([])

    const dataProduct = [
        {
            id: 1,
            name: 'Cucha pequeña',
            price: 2000,
            stock: 10,
            img: cucha,
            initial: 0,
            description: 'Cucha pequeña, en tela impermeable y antidesgarro, rellena de goma espuma'
        },
        {
            id: 2,
            name: 'Torre de felpa',
            price: 2000,
            stock: 10,
            img: torre,
            initial: 0,
            description: 'Torre de felpa de 50cm de alto, muy resistente y estética'
        },
        {
            id: 3,
            name: 'Torre Anillo felpa',
            price: 2000,
            stock: 10,
            img: torre2,
            initial: 0,
            description: 'Torre de felpa de 80cm de alto, muy resistente y estética'
        },
        {
            id: 4,
            name: 'Pechera Mediana',
            price: 2000,
            stock: 10,
            img: pechera,
            initial: 0,
            description: 'Pechera para perros de hasta 30kg'

        }
    ]

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataProduct)
        }, 2000)
    })

    useEffect(() => {
        getProduct.then((data) => {
            data.filter(data => {
                if (data.id === parseInt(id)) {
                    setProduct(data)
                    console.log(data)
                }
            })

            setLoader(false)

        })

    })
    return (

        <div>
            {
                loader ? <CircularProgress /> :
                    <ItemDetail data={product} />
            }
        </div>

    )
}
export default ItemDetailContainer