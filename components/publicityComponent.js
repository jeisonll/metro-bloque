export default function PublicityComponent(){
    return(

        <>
         <div className="container my-5">
             <div className="row justify-content-center">
                 <div className="col-6 position-relative">
                     <h3 className="position-absolute"><b>Best Offer Today !</b></h3>
                     <p className="bg-warning position-absolute p-2">NEW COLLECTION TOOLS</p>
                     <h5 className="position-absolute"><b className="text-danger">30%</b>off New Trending</h5>
                     <button className="btn btn-warning position-absolute"><b>SHOP NOW</b></button>
                     <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img5_850x.jpg?v=1569400934" alt="imagen publicidad"/>
                 </div>
                 <div className="col-6 position-relative">
                     <h3 className="position-absolute"><b>Plumber’s Picks!</b></h3>
                     <p className="bg-warning position-absolute p-2">LIMITED STOCK OFFERS</p>
                     <h5 className="position-absolute"><b className="text-danger">42% </b>off Best Deals</h5>
                     <button className="btn btn-warning position-absolute"><b>SHOP NOW</b></button>
                     <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img6_850x.jpg?v=1569400948" alt="imagen publicidad2"/>

                 </div>
             </div>
             <style jsx>
                 {`
                  h3,p{color: black;
                   margin-left: 60%;
                   margin-top: 5%;
                  }
                  h5{
                  margin-left: 64%;
                  margin-top: 21%;
                  font-weight: bold;
                  }
                  button{
                  text-decoration-color: black;
                  padding-left: 4%;
                  padding-right: 4%;
                  margin-left: 70%;
                  margin-top: 27%;
                  }
                  button:hover{
                  background-color: black;
                  color: white;
                  margin-left: 70%;
                  margin-top: 27%;
                  border: 0;
                  }
                  p{
                  margin-left: 64%;
                  margin-top: 13%;
                  font-weight: bold;
                  }
                 `
                 }
             </style>
         </div>
        </>
    )
}