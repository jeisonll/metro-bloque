export default function ProductsColCardAndImage(){
    return(
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card" style={{width: "13rem"}}>
                        <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/products/product19_medium.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h6><b>THE VISE</b></h6>
                                <h6 className="text-danger mt-1">Rs.753.00</h6>
                            </div>
                    </div>
                </div>
                <div className="col-6"></div>
            </div>
        </>
    )
}