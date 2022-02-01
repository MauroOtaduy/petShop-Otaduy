import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router";
import db from '../../firebase'
import { doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [loader, setLoader] = useState(true)
    const [product, setProduct] = useState([])


    async function getProduct(db) {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let producto = docSnap.data();
            producto.id = docSnap.id
            setProduct(producto)
            setLoader(false)
        } else {
            console.log("No such document!");
        }
    }
    useEffect(() => {
        getProduct(db)
    }, [id])
    return (
        <div className='itemDetail-container'>
            <h2 id="ItemDetail-title">Detalles del producto</h2>
            <div className='detail-container'>

                {
                    loader ? <CircularProgress /> :
                        <ItemDetail data={product} />
                }
            </div>
        </div>

    )
}
export default ItemDetailContainer