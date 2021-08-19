export default function PublicityComponent({visible}){
    return(

        <> {console.log(visible)}
         <div className=" container my-5">
             <div className="row justify-content-center">

                 <div className="col-6 position-relative">
                     <div className={visible}>
                         <h3 className="position-absolute"><b>Best Offer Today !</b></h3>
                         <p className="bg-warning position-absolute p-2">NEW COLLECTION TOOLS</p>
                         <h5 className="position-absolute"><b className="text-danger">30%</b>off New Trending</h5>
                         <button className="btn btn-warning position-absolute"><b>SHOP NOW</b></button>
                         <img style={{width:"100%"}} src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img5_850x.jpg?v=1569400934" alt="imagen publicidad"/>

                     </div>
                 </div>
                 <div className="col-6 position-relative">
                     <div className={visible}>
                         <h3 className="position-absolute"><b>Plumber’s Picks!</b></h3>
                         <p className="bg-warning position-absolute p-2">LIMITED STOCK OFFERS</p>
                         <h5 className="position-absolute"><b className="text-danger">42% </b>off Best Deals</h5>
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
                  
                  .visible {
                      //width: 315px;
                      //display: flex;
                      //justify-content: space-between;
                      //align-items: center;
                      //position: absolute; 
                      //z-index: 3;
                      //left: 20%; 
                    animation-name: visible;
                    animation-duration: 1s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                  }
//.visible img {
//  border: 3px solid #f0ff54;
//  border-radius: 50%;
//}
//.visible div {
//  width: 220px;
//  height: 50px;
//  background-color: white;
//  opacity: 0.7;
//  clip-path: polygon(10% 0%, 100% 1%, 100% 100%, 10% 100%, 0% 50%);
//  border-right: 8px solid #f0ff54;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//}
//.visible p {
//  font-family: 'Inconsolata', monospace;
//  font-size: 15px;
//  padding-left: 10px;
//}
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
                  @keyframes visible {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
    transform: translateX(30px);
  }
}
                 `
                 }
             </style>
         </div>
        </>
    )
}