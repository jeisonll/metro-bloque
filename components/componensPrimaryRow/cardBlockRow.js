import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import  numStars from "../starsComponent"
import {array} from "../array/array";
import {getProductServices} from "../../services/ProductServices";
import CardBlock from "./componentPrimary/CardBlock";
export default function CardBlockRow(){

    const [products,setProduts]=useState([]);

    useEffect(()=>{
        // listarMovies();
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduts(json))
    },[])
    
    // const listarMovies = () => {
    //   getProductServices().then((res)=>{
    //       if (res.json())
    //
    //
    //
    //   })
    //
    // }

    return(
        <>
            {products.map((product) => (
                    <div className="col mt-3 text-center " key={product.id}>
                        <div className="row ">
                            <CardBlock
                                title={product.title}
                            image={product.image}
                            category={product.category}
                            price={product.price}

                            />
                        </div>
                        <style jsx global >
                            {`
                                                 
                            `}
                        </style>
                    </div>
                )
            )
            }
        </>
    )
}