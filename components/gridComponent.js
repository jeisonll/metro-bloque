import Image from 'next/image'
import profilePic from '../public/bolsa.png'
import React from "react";

export default function GridComponent(){

    return(
        <>
            <div className="container justify-content-center">
                <div className="row justify-content-center" >
                    <div className="col-sm-3 bg-primary border border-2 border-white position-relative " id="imageGrid">
                        <div className="  "  >
                            <div className="position-absolute"id="imageGrid1" >
                                <Image id="imagen"  style={{width:"100px"}} className="shadow my-5" src={profilePic} alt="imagen publicidad"/>
                            </div>
                            <div className="align-content-center "style={{margin:"20%",left:"10%"}}>
                                <h2 className="title text-white" >
                                    {/*<p style=" border-bottom-color:#FF0000; border-bottom-style:dashed; border-bottom-width:2px; border-top-color:#000099; border-top-style:solid; border-top-width:1px;"> Un ejemplo de estilos de bordes </p>*/}
                                    <b>Asset Tools</b>
                                </h2>
                                <h6  style={{width: "94%",backgroundColor:"black"}} className="text-white p-2" ><b>FLAT 35% DISCOUNT</b></h6>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-7  ">
                        <div className="row justify-content-center ">
                            <div className="col-6 col-sm-6 border border-2 border-white position-relative bg-success " id="imageGrid">
                                <div className=""  style={{width: "20rem"}}>
                                    <div className="position-absolute"id="imageGrid" style={{paddingInlineStart:"50%",top:"0"}}>
                                        <img style={{width: "100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img1_400x.png"/>
                                    </div>
                                    <div className="car"style={{marginTop:"50%",left:"0"}}>
                                        <p className="text text-white"><b>Modern Tool</b></p>
                                        <h4 className="title text-white"><b>Suprimo’s Kit</b>

                                            </h4>
                                        <h6  style={{width: "65%",color:"black"}} className="bg-warning  p-2 " ><b><a>COUPON CODE: 2134</a></b></h6>

                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-sm-6 bg-danger border border-2 border-white position-relative" id="imageGrid">
                                <div className=""  style={{width: "18rem"}}>
                                    <div className="position-absolute"id="imageGrid" style={{paddingInlineStart:"40%",top:"0"}}>
                                        <img style={{width: "100%"}} src="https://ftmapp-production.s3.amazonaws.com/uploads/product/picture/1756/large_retina_GWS22230.png" alt="hola"/>
                                    </div>
                                    <div className="car"style={{marginTop:"50%",left:"0"}}>

                                        <h4 className="title text-warning">
                                            <b>Hand & Modern
                                                Equipments</b>
                                        </h4>
                                        <p className="text text-white"><b>Mega Collections</b></p>
                                        <h6  style={{width: "65%"}} className="bg-warning  p-2" ><b><a>COUPON CODE: 2134</a></b></h6>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-12 col-sm-12   bg-warning border border-2 border-white position-relative" id="imageGrid4">
                                <div className=""  >
                                    <div className="position-absolute"id="imageGrid" style={{paddingInlineStart:"60%",top:"0"}}>
                                        <img style={{width: "100%"}} src="https://ftmapp-production.s3.amazonaws.com/uploads/product/picture/1756/large_retina_GWS22230.png" alt="hola"/>
                                    </div>
                                    <div className="align-content-center "style={{margin:"20%",left:"10%", color:"black"}}>
                                        <h2 className="title" >
                                            {/*<p style=" border-bottom-color:#FF0000; border-bottom-style:dashed; border-bottom-width:2px; border-top-color:#000099; border-top-style:solid; border-top-width:1px;"> Un ejemplo de estilos de bordes </p>*/}
                                            <b>Flat 65% Off*</b> on Hand Tools
                                        </h2>
                                        <h6  style={{width: "85%",borderStyle:"dashed", borderColor:"black"}} className="bg-warning text-center p-2 text-danger" ><b>COUPON CODE: 2134</b></h6>

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
                    
                    .row{marginLeft:"10%"}
                    #imageGrid:hover{
                    padding-inline-start:10%;
                    top:10%;
                    transition: 2s;
                  //  background: url("");
                    } 
                    @media screen and (max-width: 900px){
                    .row{
                    width: 100% ;
                    
                    }@media screen and (max-width: 900px){
                    #imagen{
                    width: 10px ;
                    
                    }
                    Image{
                    width: 10px ;
                    
                    }
                    
                    
                    
                  }
                      
                                    
`}
                </style>
            </div>
        </>
    )
}