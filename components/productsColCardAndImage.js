import CardComponents from "./cardComponents";
import React, {useState} from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductsColCardAndImage(){
    const [isHover1,setIsHover1]=useState(false)
    const [isHover2,setIsHover2]=useState(false)
    const [isHover3,setIsHover3]=useState(false)
    const [isHover4,setIsHover4]=useState(false)
    const [isHover5,setIsHover5]=useState(false)
    const [isHover6,setIsHover6]=useState(false)
    return(
        <div className="container mt-5" >
            <div className="row">
                <div className="col-6">
                    <h4 className=""><b>NEW PRODUCTS</b></h4>
                    <h2 className=" mb-4"><img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline1.png" alt="separator"/></h2>
                    <div className="container  mt-2" style={{width: "100%"}}>
                        <div className="row justify-content-center" >
                            <div className="col-3 text-center mb-5" >
                                <div className="row justify-content-center" >

                                        <div className="card" id="imageHover"  style={{width: "10rem"}} onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} >
                                            {!isHover1&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                                            )}
                                            <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                                            <div className="card-body" id="colorblack">
                                                <h6 className="card-title">THE VISE</h6>
                                                <p className="card-text">Rs. 753.00</p>
                                                <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                                            </div>
                                        </div>

                                </div>
                            </div>
                            <div className="col-3 text-center mb-5 mx-lg-2 " >
                                <div className="row justify-content-center " >

                                    <div className="card" id="imageHover"  style={{width: "10rem"}} onMouseEnter={()=>setIsHover2(true)} onMouseLeave={()=>setIsHover2(false)} >
                                        {!isHover2&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                                        )}
                                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                                        <div className="card-body"id="colorblack">
                                            <h6 className="card-title">THE VISE</h6>
                                            <p className="card-text">Rs. 753.00</p>
                                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3 text-center mb-5 mx-lg-2 " >
                                <div className="row justify-content-center " >

                                    <div className="card" id="imageHover"  style={{width: "10rem"}} onMouseEnter={()=>setIsHover3(true)} onMouseLeave={()=>setIsHover3(false)} >
                                        {!isHover3&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                                        )}
                                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                                        <div className="card-body" id="colorblack">
                                            <h6 className="card-title">THE VISE</h6>
                                            <p className="card-text">Rs. 753.00</p>
                                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="row justify-content-center" >
                            <div className="col-3 text-center mb-5  " >
                                <div className="row justify-content-center " >

                                    <div className="card" id="imageHover"  style={{width: "10rem"}} onMouseEnter={()=>setIsHover4(true)} onMouseLeave={()=>setIsHover4(false)} >
                                        {!isHover4&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                                        )}
                                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                                        <div className="card-body" id="colorblack">
                                            <h6 className="card-title">THE VISE</h6>
                                            <p className="card-text">Rs. 753.00</p>
                                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3 text-center mb-5 mx-lg-2 " >
                                <div className="row justify-content-center " >

                                    <div className="card" id="imageHover"  style={{width: "10rem"}} onMouseEnter={()=>setIsHover5(true)} onMouseLeave={()=>setIsHover5(false)} >
                                        {!isHover5&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                                        )}
                                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                                        <div className="card-body" id="colorblack">
                                            <h6 className="card-title">THE VISE</h6>
                                            <p className="card-text">Rs. 744.00</p>
                                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-3 text-center mb-5 mx-lg-2 " >
                                <div className="row justify-content-center " >

                                    <div className="card" id="imageHover"  style={{width: "10rem"}} onMouseEnter={()=>setIsHover6(true)} onMouseLeave={()=>setIsHover6(false)} >
                                        {!isHover6&&(<img className="card-img-top position-absolute" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" style={{width:"85%",zIndex:"90"}}alt="Card image cap"/>
                                        )}
                                        <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg" alt="Card image cap"/>
                                        <div className="card-body" id="colorblack">
                                            <h6 className="card-title">THE VISE</h6>
                                            <p className="card-text">Rs. 753.00</p>
                                            <FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <h4 className="mx-5"><b>NEW ARRIVALS</b></h4>
                    <h2 className="mx-5 mb-4"><img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline1.png" alt="separator"/></h2>

                    <div className="row justify-content-center " >

                        <div className="card" id="imageHover"  style={{width: "25rem"}} onMouseEnter={()=>setIsHover3(true)} onMouseLeave={()=>setIsHover3(false)} >
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
            <style jsx global>
                {`


            
            #colorblack h6{
            color: black;
            font-weight: bold;
            }   
            #colorblack p{
            color: #D70606;
            font-weight: bold;
            }   
                        
`}
            </style>
        </div>
    )
}