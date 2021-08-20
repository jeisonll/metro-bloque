import React, {Component, useEffect, useState} from 'react';
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
import PublicityComponent from "./publicityComponent";
import ProductCatalog from "./productCatalog";

export default function Layout({tamaño}) {
const [values,setValues]=useState("hidden")
    const [valuesCategory, setvaluesCategory] = useState("hidden");




    useEffect(() => {
        console.log(tamaño)
        window.onscroll = () => {

            console.log(window.pageYOffset);
            if (document.documentElement.scrollTop > 1200&&document.documentElement.scrollTop < 1500) {
                setValues("visible");

            }
            if (document.documentElement.scrollTop > 500&&document.documentElement.scrollTop < 1200) {
                setvaluesCategory("visible");

            }

        }

    }, []);



            return(
    <>


        <ModalHome/>
        <HeaderHome/>
        <HeaderNavbar/>
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
        {/*<GridCategory visible={valuesCategory}/>*/}
        <PublicityComponent visible={values}/>
        <CardComponents/>
        {/*<GridComponent/>*/}
        <ProductsColCardAndImage/>
        <ProductCatalog/>






    </>

)
}