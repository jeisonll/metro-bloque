import React from "react";

export default function CardComponents(){
    return(
        <div>
            <h3 className="text-center ">FEATURED PRODUCTS</h3>
            <h2 className="text-center mb-4"><b >------------------------------</b></h2>
            <div className="container center position-relative mt-2 mb-2">
                <div className="row">
                    <div className="col-4 text-center mb-5 ">
                        <div className="row">
                            <div className="card" id="imageHover" style={{width: "18rem"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg?v=1568108096" className="card-img-top" alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title ">REDUCERS & ADAPTERS</h5>
                                    <p className="card-text">
                                        Nam tempus turpis at metus scelerisque placerat....</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    Rs. 100.00 Rs. 500.00
                                </ul>
                                <div className="card-body" id="ClassHover">
                                    <button className="btn opacity-100 text-white" >ADD TO CARD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 text-center ">
                        <div className="row">
                            <div className="card" id="imageHover" style={{width: "18rem"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg?v=1568108096" className="card-img-top" alt="image"/>
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
                    <div className="col-4 text-center">
                        <div className="row">
                            <div className="card" id="imageHover" style={{width: "18rem"}}>
                                <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product1_medium.jpg?v=1568108096" className="card-img-top" alt="image"/>
                                <div className="card-body">
                                    <h5 className="card-title ">REDUCERS & ADAPTERS</h5>
                                    <p className="card-text">
                                        Nam tempus turpis at metus scelerisque placerat....</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    Rs. 100.00 Rs. 500.00
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
                .clasehover:hover{
                background-color: black !important;
                }
                #ClassHover:hover{
                background-color: black !important;
                }
                #imageHover:hover{
                box-sizing:border-box;
                display:block;
                 /*Padding igual al ancho de la imagen nueva*/
                background: url("https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product32_9b1e0e9a-d130-4c20-b1ef-2ae3183d314d_medium.jpg")

                }
`}
            </style>
        </div>
    )
}