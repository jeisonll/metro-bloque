import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import  numStars from "../starsComponent"
import {array} from "../array/array";
import {getProductServices} from "../../services/ProductServices";
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
                    <div className="col mt-3 text-center d-flex " key={product.id}>
                        <div className="row ">
                            <div className="card  "  id="imageHover" style={{width: "18rem"}}>
                                <div id="imagen123">
                                    <img id="imagen" src={product.image}
                                         // onMouseEnter={e => (e.currentTarget.src = product.image2)}
                                         // onMouseLeave={e => (e.currentTarget.src = product.image)}
                                         className="img-fluid" alt="image"/>
                                </div>
                                <div className="card-body  "style={{alignItems:"center"}}>
                                    <h5 className="card-title "><b>{product.title}</b></h5>
                                    <p className="card-text">
                                        {product.category}<br/>
                                        price<br/>
                                        {product.price}</p>
                                </div>
                                <ul className="list-group list-group-flush text-danger">
                                    <b>ver producto</b>
                                    {/*<div className="d-inline-block">{numStars(product.stars)}*/}
                                    {/*</div>*/}
                                </ul>
                                <div className="card-footer bg-white" id="ClassHover">
                                    <button className="btn opacity-100 text-white">ADD TO CARD</button>
                                </div>
                            </div>
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