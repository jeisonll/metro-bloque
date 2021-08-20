import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faSearch, faShoppingCart, faSignInAlt, faUser} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function HeaderHome(){
    return(
        <div className="container  p-4">
            <div className="container">
                <div className="row text-center justify-content-center justify-content-lg-start ">
                    <div className="col-4 col-lg-3 p-3 p-md-3 p-lg-0">
                        <a href="" ><img  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/logo.png"   alt="logo"/></a>
                    </div>
                    <div className=" col-lg-3 ">
                    </div>
                    <div className="col-12 col-sm col-lg-6 justify-content-lg-end ">
                        <div className="row">
                            <div className="col text-center p-2" >
                                <FontAwesomeIcon href="/movies" className="text-dark position-relative" display="relative" size="1x" icon={faSearch}/>
                                <a className="mr-2 mb "> </a>
                            </div>
                            <div className="col text-center p-2" >
                                <FontAwesomeIcon  className="text-dark" size="1x" icon={faSignInAlt}/>
                                <a className="mr-2 mb "> LOG IN</a>
                            </div>
                            <div className="col text-center p-2">
                                <FontAwesomeIcon  className="text-dark" size="1x" icon={faUser}/>
                                <a className="mr-2 mb "> REGISTER</a>
                            </div>
                            <div className="col text-center p-2 justify-content-center">
                                <FontAwesomeIcon  className="text-dark" size="1x" icon={faHeart}/>
                                <a className="me-2 mb "> WISHLIST</a>
                            </div>
                            <div className="col text-center p-2">
                                <FontAwesomeIcon  className="text-dark" size="1x" icon={faShoppingCart}/>
                                <a className="me-2 mb "> CART</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-relaivte" >
            </div>
            <div className="container d-flex justify-content-end" >

            </div>
        </div>
    )
}