import React, {useState} from "react";

export default function CardComponents(){
    const [isHover1,setIsHover1]=useState(false)
    const [isHover2,setIsHover2]=useState(false)
    const [isHover3,setIsHover3]=useState(false)
    const [isHover4,setIsHover4]=useState(false)
    return(
        <div>
            <h3 className="text-center ">FEATURED PRODUCTS</h3>
            <h2 className="text-center mb-4"><b >------------------------------</b></h2>
            <div className="container center mt-2  mx-5 position-">
                <div className="row ">
                    <div className="col-3 text-center mb-5  " >
                        <div className="row" >
                            <div className="card  position-relative " onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} id="imageHover" style={{width: "18rem",left:"50%"}}>
                                {!isHover1&&(<img id="imageHoverImg"  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg " className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>
                                )}
                                <img id="imageHoverImg" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg" className="position-relative"  alt="image"/>

                                <div className="card-body">
                                    <h5 className="card-title ">REDUCERS & ADAPTERS</h5>
                                    <p className="card-text">
                                        Nam tempus turpis at metus scelerisque placerat....</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    Rs. 100.00 Rs. 500.00
                                </ul>
                                <div className="card-body " id="ClassHover">
                                    <button className="btn rounded-5 opacity-100 text-white" >ADD TO CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-center ">
                        <div className="row">
                            <div className="card  " onMouseEnter={()=>setIsHover2(true)} onMouseLeave={()=>setIsHover2(false)} id="imageHover" style={{width: "18rem",left:"50%"}}>
                                {!isHover2&&(<img id="imageHoverImg"  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product18_70da4d32-c08f-47b9-9bf1-f0ec27b87dc0_medium.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>
                                )}
                                <img id="imageHoverImg" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product19_medium.jpg" className="position-relative"  alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title ">THE VISE</h5>
                                    <p className="card-text">
                                        Nam tempus turpis at metus scelerisque placerat...</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    Rs. 753.00
                                </ul>
                                <div className="card-body" id="ClassHover">
                                    <button className="btn opacity-100 text-white" >ADD TO CARD</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-3 text-center">
                        <div className="row">
                            <div className="card  " onMouseEnter={()=>setIsHover3(true)} onMouseLeave={()=>setIsHover3(false)} id="imageHover" style={{width: "18rem",left:"50%"}}>
                                {!isHover3&&(<img id="imageHoverImg"  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product12_31bd55cf-6146-46ae-a11c-8fc2f076edde_medium.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>
                                )}
                                <img id="imageHoverImg" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product22_medium.jpg" className="position-relative"  alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title ">HACKSAW BLADES KIT</h5>
                                    <p className="card-text">
                                        Nam tempus turpis at metus scelerisque placerat....</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    Rs. 389.00
                                </ul>
                                <div className="card-body" id="ClassHover">
                                    <button className="btn opacity-100 text-white" >ADD TO CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="row">
                            <div className="card  " onMouseEnter={()=>setIsHover4(true)} onMouseLeave={()=>setIsHover4(false)} id="imageHover" style={{width: "18rem",left:"50%"}}>
                                {!isHover4&&(<img id="imageHoverImg"  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product28_b6beb2f3-9b6f-4918-9529-6a27a19ecfc4_medium.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>
                                )}
                                <img id="imageHoverImg" src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product23_medium.jpg" className="position-relative"  alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title ">MONKEY SPANNERS</h5>
                                    <p className="card-text">
                                        Nam tempus turpis at metus scelerisque placerat....</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    Rs. 199.00
                                </ul>
                                <div className="card-body" id="ClassHover">
                                    <button className="btn opacity-100 text-white" >ADD TO CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`
                
                #ClassHover:hover{
                background-color: black !important;
                }
                #imageHoverImg {
                
                background-image: url("https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg")

                }
                #imageHover:hover{
                opacity: 100%;
                }
`}


            </style>
        </div>
    )
}