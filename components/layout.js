import React,{Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import {faSearch,faShoppingCart, faHeart,faSignInAlt,faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Slaider from "./slider";
import "../public/image.png"
import HeaderNavbar from "./headerNavbar";
import ModalHome from "./modalHome";
import GridCategory from "./gridCategory";
import CardComponents from "./cardComponents";
import GridComponent from "./gridComponent";
import HeaderHome from "./headerHome";
import ProductsColCardAndImage from "./productsColCardAndImage";

export default function Layout() {
return(
    <div>

        <body>
        <ModalHome/>
        <header className="container d-flex p-4"><HeaderHome/></header>
        <div className="justify-content-center position-sticky top-0 "style={{zIndex:"100"}} id="navbar">
            <HeaderNavbar/>
        </div>
        <div>
            <div className="container mt-2 mb-2">
                <div className="row">
                    <div className="col-4 text-center border-end ">
                        Free Shipping <b>worldwide No Minimum</b>
                    </div>
                    <div className="col-4 text-center border-end">
                        <b>25%</b> off your first order
                    </div>
                    <div className="col-4 text-center ">
                        <b>Secure</b> Checkout Guarantee
                    </div>
                </div>
            </div>
        </div>
            <Slaider/>
            <GridCategory/>
            <div className="justify-content-center">
                <CardComponents/>
                <GridComponent/>
                <ProductsColCardAndImage/>
            </div>
        </body>




    </div>

)
}