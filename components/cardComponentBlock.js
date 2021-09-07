import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Main from "./componensPrimaryRow/cardBlockRow";
import ShoppingCart from "./ShoppingCart";


export default function CardComponentBlock() {
    useEffect(() => {

        const local = localStorage.getItem("movieFavorite")
        const movie = local ? JSON.parse(local) : [];

    }, []);

    return (
        <div className="mb-5">
            <h3 className="text-center"><b>FEATURED PRODUCTS</b></h3>
            <h2 className="text-center mb-4"><img
                src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline.png" alt="separtor"/></h2>

            <div className="container  mt-2 justify-content-center">

                <div className="row justify-content-center row-cols-2 row-cols-md-2 row-cols-lg-4 mx-5 mx-md-0 mx-lg-0 ">

                    {/*<CardBlockRow/>*/}
                    <Main/>

                </div>
            </div>

        </div>
    )
}