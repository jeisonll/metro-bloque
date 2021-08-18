import Image from 'next/image'
import profilePic from '../public/bolsa.png'
import React from "react";

export default function GridComponent(){

    return(
        <>
            <div className="container justify-content-center">
                <div className="row" style={{marginLeft:"10%"}}>
                    <div className="col-sm-3 bg-primary mx-2 position-relative" id="imageGrid">
                        <div className=""  >
                            <div className="position-absolute"id="imageGrid" style={{padding:"10%",top:"50%",left:"0",right:"0",bottom:"0"}}>
                                <Image className="shadow" src={profilePic} alt="imagen publicidad"/>
                            </div>
                            <div className="align-content-center "style={{margin:"20%",left:"10%"}}>
                                <h2 className="title" >
                                    {/*<p style=" border-bottom-color:#FF0000; border-bottom-style:dashed; border-bottom-width:2px; border-top-color:#000099; border-top-style:solid; border-top-width:1px;"> Un ejemplo de estilos de bordes </p>*/}
                                    Asset Tools
                                </h2>
                                <h6  style={{width: "94%",backgroundColor:"black"}} className="text-white p-2" >FLAT 35% DISCOUNT</h6>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7  ">
                        <div className="row">
                            <div className="col-8 position-relative col-sm-6 bg-success " id="imageGrid">
                                <div className=""  style={{width: "18rem"}}>
                                    <div className="position-absolute"id="imageGrid" style={{paddingInlineStart:"50%",top:"0"}}>
                                        <img style={{width: "100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img1_400x.png"/>
                                    </div>
                                    <div className="car"style={{marginTop:"50%",left:"0"}}>
                                        <p className="text">Modern Tool</p>
                                        <h4 className="title">
                                            Suprimo’s Kit
                                            </h4>
                                        <h6  style={{width: "65%"}} className="bg-warning  p-2" >COUPON CODE: 2134</h6>

                                    </div>
                                </div>
                            </div>
                            <div className="col-4 col-sm-5 bg-danger mx-2 position-relative" id="imageGrid">
                                <div className=""  style={{width: "18rem"}}>
                                    <div className="position-absolute"id="imageGrid" style={{paddingInlineStart:"40%",top:"0"}}>
                                        <img style={{width: "100%"}} src="https://ftmapp-production.s3.amazonaws.com/uploads/product/picture/1756/large_retina_GWS22230.png" alt="hola"/>
                                    </div>
                                    <div className="car"style={{marginTop:"50%",left:"0"}}>
                                        <p className="text">Modern Tool</p>
                                        <h4 className="title">
                                            Suprimo’s Kit
                                        </h4>
                                        <h6  style={{width: "65%"}} className="bg-warning  p-2" >COUPON CODE: 2134</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-sm-11 bg-warning mt-2 position-relative" id="imageGrid">
                                <div className=""  >
                                    <div className="position-absolute"id="imageGrid" style={{paddingInlineStart:"60%",top:"0"}}>
                                        <img style={{width: "100%"}} src="https://ftmapp-production.s3.amazonaws.com/uploads/product/picture/1756/large_retina_GWS22230.png" alt="hola"/>
                                    </div>
                                    <div className="align-content-center "style={{margin:"20%",left:"10%"}}>
                                        <h2 className="title" >
                                            {/*<p style=" border-bottom-color:#FF0000; border-bottom-style:dashed; border-bottom-width:2px; border-top-color:#000099; border-top-style:solid; border-top-width:1px;"> Un ejemplo de estilos de bordes </p>*/}
                                            <b>Flat 65% Off*</b> on Hand Tools
                                        </h2>
                                        <h6  style={{width: "85%",borderStyle:"dashed", borderColor:"black"}} className="bg-warning text-center p-2 text-danger" >COUPON CODE: 2134</h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>
                    {`
                    #imageGrid{ 
                    
                    position: center
                    }
                    
                    #imageGrid:hover{
                    padding-inline-start:10%;
                    top:10%;
                    transition: 2s;
                  //  background: url("");
                    }   
                                    
`}
                </style>
            </div>
        </>
    )
}