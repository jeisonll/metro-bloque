import React, {useEffect, useState} from "react";


export default function AddCarShopping({product}){

    const [productLocal, setProductLocal] = useState([])
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState("ADD TO CARD")

    useEffect(() => {
        setLoading(true);
        const local = localStorage.getItem("productFavorite")
        const produc = local ? JSON.parse(local) : [];
        setProductLocal(produc);

    }, []);
    const addProductLocal = (productData) => {
        const productCarExist = productLocal.find((product) => product.id === productData.id);
        if (productCarExist) {
            const newProduct = Object.assign([], productLocal);
            setProductLocal(newProduct.filter((product) => productData.id !== product.id))
        } else {
            const newProduct = Object.assign([], productLocal);
            newProduct.push(productData);
            setProductLocal(newProduct);
        }
        localStorage.setItem("productFavorite", JSON.stringify(productLocal));
    }




    return(
        <>

            <button onClick={()=>addProductLocal(product)} className="btn opacity-100 text-white">
                 {!productLocal.find((m) => m.id === product.id) ?
                    "ADD TO CARD" : "REMOVE TO CARD"}</button>
        </>
    )
}