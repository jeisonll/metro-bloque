import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch, faShoppingCart, faSignInAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function HeaderHome(){
    return(
        <>
            <div className="position-relaivte " >
                <a href="/movies" ><img  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/logo.png"   alt="logo"/></a>
            </div>
            <div className="container d-flex justify-content-end" >
                <div className=" text-center p-2" >
                    <FontAwesomeIcon href="/movies" className="text-dark position-relative" display="relative" size="1x" icon={faSearch}/>
                    <a className="mr-2 mb "> </a>
                </div>
                <div className=" text-center p-2" >
                    <FontAwesomeIcon  className="text-dark" size="1x" icon={faSignInAlt}/>
                    <a className="mr-2 mb "> LOG IN</a>
                </div>
                <div className=" text-center p-2">
                    <FontAwesomeIcon  className="text-dark" size="1x" icon={faUser}/>
                    <a className="mr-2 mb "> REGISTER</a>
                </div>
                <div className=" text-center p-2 justify-content-center">
                    <FontAwesomeIcon  className="text-dark" size="1x" icon={faHeart}/>
                    <a className="me-2 mb "> WISHLIST</a>
                </div>
                <div className=" text-center p-2">
                    <FontAwesomeIcon  className="text-dark" size="1x" icon={faShoppingCart}/>
                    <a className="me-2 mb "> CART</a>
                </div>
            </div></>
    )
}