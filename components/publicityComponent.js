export default function PublicityComponent({visible}){
    return(

        <> {console.log(visible)}
         <div className=" container my-5">
             <div className="row ">

                 <div className="contenedor col-12 col-md-9 col-lg-6 position-relative  ">
                     <div className={visible}>

                         {/*<div className="position-relative border border-success">*/}
                         {/*    <div  className="row text-center position-absolute p-5 m-2 border border-success border-5 " style={{zIndex:"100",left:"35%"}}>*/}
                         {/*        <div className="col-12 mx-5" >*/}
                         {/*            <h4 className=" d-inline"><b></b></h4>*/}
                         {/*        </div>*/}
                         {/*        <div className="col-12 mx-5" >*/}
                         {/*            <p className="bg-warning  p-2"></p>*/}
                         {/*        </div>*/}
                         {/*        <div className="col-12 mx-5" >*/}
                         {/*            <h5 className="d-inline"><b className="text-danger">30%</b><b>off New Trending</b></h5><br/>*/}
                         {/*        </div>*/}
                         {/*        <div className="col-12  ">*/}
                         {/*            <button className="btn btn-warning  position-absolute"><b>SHOP NOW</b></button>*/}
                         {/*        </div>*/}
                         {/*        <div className="row">*/}
                         {/*            <div className="col-12 ">*/}
                         {/*            </div>*/}
                         {/*        </div>*/}
                         {/*    </div>*/}
                         {/*    <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img5_850x.jpg?v=1569400934" alt="imagen publicidad"/>*/}
                         {/*</div>*/}
                         <h3 className="position-absolute "><b>Best Offer Today!</b></h3>
                         <p className="bg-warning position-absolute p-2">NEW COLLECTION TOOLS</p>
                         <h5 className="position-absolute "><b className="text-danger">30%</b><b>off New Trending</b></h5>
                         <button className="btn btn-warning position-absolute"><b>SHOP NOW</b></button>



                         <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img5_850x.jpg?v=1569400934" alt="imagen publicidad"/>

                     </div>
                 </div>
                 <div className="contenedor2 col-12 col-md-9 col-lg-6 position-relative">
                     <div className={visible}>





                             <h3 className="position-absolute "><b>Plumber’s Picks!</b></h3>
                             <p className="bg-warning position-absolute p-2">LIMITED STOCK OFFERS</p>
                             <h5 className="position-absolute "><b className="text-danger">42% </b>off Best Deals</h5>
                             <button className="btn btn-warning position-absolute"><b>SHOP NOW</b></button>



                         <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img6_850x.jpg?v=1569400948" alt="imagen publicidad2"/>

                     </div>
                 </div>
             </div>
             <style jsx>
                 {`
                  .hidden {
                   display: none;
                  }
                  //.contenedor{
                  //width: 50%;
                  //float: left;
                  //}.contenedor2{
                  //width: 50%;
                  //float: right;
                  //}
                  @media screen and (max-width: 540px){
                    .contenedor{
                    width: 100%;
                    flex-direction: column;
                    padding-bottom: 10px;
                    }.contenedor2{
                    width: 100%;
                    flex-direction: column;
                    }
                    
                    p{
                    font-size: 70%;
                    width: 30%;
                    }
                    button{
                    font-size: 70%;
                    width: 20%;
                    }
                    
                  }
                  @media screen and (max-width: 514px){
                    
                    h5{
                    font-size: 90%;
                    }
                    h3{
                    font-size: 100%;
                    }
                    p{
                    font-size: 60%;
                    }}
                     @media screen and (max-width: 314px){
                    
                    h5{
                    font-size: 90%;
                    }
                    h3{
                    font-size: 100%;
                    }
                    p{
                    font-size: 30%;
                    }
                    
                    
                  }
                  @media screen and (max-width: 1199px){
                    
                    h5{
                    font-size: 90%;
                    }
                    h3{
                    font-size: 100%;
                    }
                    p{
                    font-size: 80%;
                    }
                    
                    
                  }

                  .visible{
                    animation-name: visible;
                    animation-duration: 1s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                  }
                  h3{
                   color: black;
                   margin-left: 60%;
                   margin-top: 6%;
                  }
                  h5{
                  margin-left: 61%;
                  margin-top: 21%;
                  font-weight: bold;
                  }
                  button{
                  text-decoration-color: black;
                  padding-left: 4%;
                  padding-right: 4%;
                  margin-left: 66%;
                  margin-top: 27%;
                  }
                  button:hover{
                  background-color: black;
                  color: white;
                  margin-left: 66%;
                  margin-top: 27%;
                  border: 0;
                  }
                  p{
                  margin-left: 61%;
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