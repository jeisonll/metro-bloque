import React, {useEffect, useState} from 'react';

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
import CardComponentBlock from "./cardComponentBlock";
import Car from "../pages/cart";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../store/actions/actionProducts";

export default function Layout({tamaño}) {
    const [values, setValues] = useState("hidden")
    const [valuesCategory, setvaluesCategory] = useState("hidden");



    useEffect(() => {
        console.log(tamaño)
        window.onscroll = () => {

            console.log(window.pageYOffset);
            if (document.documentElement.scrollTop > 1200 && document.documentElement.scrollTop < 1500) {
                setValues("visible");

            }
            if (document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 1000) {
                setvaluesCategory("visible");


            }
            setValues("visible");
        }

    }, []);


    return (
        <>


            <ModalHome/>

            <div>
                <div className="container mt-2 mb-2">
                    <div className="row">
                        <div className="col-12  col-md-6 col-lg-4 text-center border-end ">
                            Free Shipping <b>worldwide No Minimum</b>
                        </div>
                        <div className="ccol-12  col-md-6 col-lg-4 text-center border-end d-none d-md-block">
                            <b>25%</b> off your first order
                        </div>
                        <div className="col-lg-4 text-center d-none d-lg-block">
                            <b>Secure</b> Checkout Guarantee
                        </div>
                    </div>
                </div>
            </div>
            <Slaider/>
            {/*<Car/>*/}
            <CardComponentBlock/>
            <GridCategory visible={valuesCategory}/>
            <PublicityComponent visible={values}/>
            <GridComponent/>
            <ProductsColCardAndImage/>
            {/*<ProductCatalog/>*/}
            <CardComponents/>


        </>

    )
}