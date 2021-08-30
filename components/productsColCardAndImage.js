import CardComponents from "./cardComponents";
import React, {useState} from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CONFIG_FILE} from "next/constants";
import numStars from "./starsComponent";
import CardMinis from "./componensPrimaryRow/cardMinis";

export default function ProductsColCardAndImage(){

    const [isHover3,setIsHover3]=useState(false)




    return(
        <div className="container justify-content-center mt-5 " >
            <div className="row justify-content-center   ">
                <div className="col col-lg-6  ">
                    <div className=" justify-content-center ">
                        <h4 className=""><b>NEW PRODUCTS</b></h4>
                        <h2 className=" mb-4"><img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline1.png" alt="separator"/></h2>
                        <div className="container justify-content-center " style={{width: "100%"}}>
                        <CardMinis/>
                        </div>

                    </div>
                </div>

                <div className="col col-lg-6 ">
                    <div className="">
                    <h4 className=""><b>NEW ARRIVALS</b></h4>
                    <h2 className=" mb-4"><img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline1.png" alt="separator"/></h2>

                    <div className="row justify-content-center " >

                        <div className=" card " id="imageHover"  style={{width: "25rem"}} onMouseEnter={()=>setIsHover3(true)} onMouseLeave={()=>setIsHover3(false)} >
                            {!isHover3&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                            )}
                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                            <div className="card-body text-center" id="colorblack" >
                                <h6 className="card-title ">THE VISE</h6>
                                <p className="card-text text-danger ">Rs. 753.00</p>
                                <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                   
                  //.contenedor1{
                  //width: 50%;
                  //float: left;
                  //}
                  //
                  //.contenedor4{
                  //width: 50%;
                  //float: right;
                  //}
                  
            //      @media screen and (max-width: 600px){
            //        .contenedor1{
            //        width: 100%;
            //        padding-bottom: 10px;
            //        }.contenedor4{
            //        width: 100%;
            //        }
            //        
            //      }
            //#colorblack h6{
            //color: black;
            //font-weight: bold;
            //}   
            //#colorblack p{
            //color: #D70606;
            //font-weight: bold;
            //}   
                        
`}
            </style>
        </div>
    )
}