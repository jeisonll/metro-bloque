import Image from 'next/image'
import profilePic from '../public/bolsa.png'
import React from "react";

export default function GridComponent(){

    return(
        <>
            <div className="container">
                <div className="row justify-content-center" >
                    <div className="col-12 col-sm-3 bg-primary border border-2 border-white position-relative " id="imageGrid">
                        <div className="row justify-content-center mt-5 ">
                            <div className="col-10 text-center">
                                <h2 className="title text-white" >
                                    <b>Asset Tools</b>
                                </h2>
                            </div>
                            <div className="col-10 text-center">
                                <h6  style={{width: "74%",backgroundColor:"black"}} className="mx-4 text-white p-3" ><b>FLAT 35% DISCOUNT</b></h6>
                            </div>
                            <div className="col-10 mb-5">
                                <Image id="imagen"  style={{width:"100%"}} className="shadow  my-5" src={profilePic} alt="imagen publicidad"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7 ">
                        <div className="row ">
                            <div className="col-12 col-sm-6 bg-success border border-2 border-white position-relative" id="imageGrid">
                                <div className="row justify-content-center">
                                    <div className="row justify-content-between">
                                    <div className="col-3 text-center mb-5 ">
                                    </div>
                                        <div className="col-9 col-lg-7 text-center mb-5 ">
                                            <img style={{width: "100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img1_400x.png"/>
                                        </div>
                                    </div>
                                    <div className="col-10 ">
                                        <p className="text text-white"><b>Modern Tool</b></p>
                                        <h4 className="title text-white"><b>Suprimo’s Kit</b></h4>
                                    </div>
                                    <div className="col-10 mb-5">
                                        <h6  style={{width: "65%",color:"black"}} className="bg-warning  p-2 " ><b><a>COUPON CODE: 2134</a></b></h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6  bg-danger border border-2 border-white position-relative" id="imageGrid">

                                <div className="row justify-content-center  border border-5 border-danger">
                                    <div className="row justify-content-between ">
                                        <div className="col-3 text-center mb-5  ">
                                        </div>
                                        <div className="col-9  text-center mb-5  ">
                                            <h4 className="title text-warning"><b>Hand & Modern Equipments</b></h4>
                                            <p className="text text-white"><b>Mega Collections</b></p>
                                            <h6  style={{width: "65%"}} className="bg-warning mx-lg-5 p-2" ><b><a>COUPON CODE: 2134</a></b></h6>

                                        </div>
                                    </div>
                                    <div className="col-10 ">
                                    </div>
                                    <div className="col-9 col-lg-7 mb-5">
                                        <img style={{width: "100%"}} src="https://ftmapp-production.s3.amazonaws.com/uploads/product/picture/1756/large_retina_GWS22230.png" alt="hola"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12    bg-warning border border-2 border-white position-relative" id="contentImageGrid">
                                <div className=""  >
                                    <div className="position-absolute"id="contentImageGrid" style={{paddingInlineStart:"60%",top:"0"}}>
                                        <img id="ImageGrid" style={{width: "100%"}} src="https://ftmapp-production.s3.amazonaws.com/uploads/product/picture/1756/large_retina_GWS22230.png" alt="hola"/>
                                    </div>
                                    <div className="align-content-center "style={{margin:"20%",left:"10%", color:"black"}}>
                                        <h2 className="title" ><b>Flat 65% Off*</b> on Hand Tools</h2>
                                        <h6  style={{width: "85%",borderStyle:"dashed", borderColor:"black"}} className="bg-warning text-center p-2 text-danger" ><b>COUPON CODE: 2134</b></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx global>
                    {`

                    #contentImageGrid:hover #ImageGrid{
                    transform: translate(-10px,10px);
                    
                    
                    transition: 1s;
                    }
                    //  
                    //#imageGrid{ 
                    //
                    //position: center
                    //}
                  //  
                   
                   
                  //  @media screen and (max-width: 900px){
                  //  .row{
                  //  width: 100% ;
                  //  }
                  //  }
                      
                                    
`}
                </style>
            </div>
        </>
    )
}