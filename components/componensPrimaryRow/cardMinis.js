import numStars from "../starsComponent";
import React from "react";
import {array3} from "../array/array";
export default function CardMinis(){
   return(
       <div className="row justify-content-center " >
           {array3.map((product)=>(
               <div key={product.id} className="col col-lg-4 justify-content-center mb-5" >
                   <div  className="row justify-content-center" >
                       <div className="card" id="imageHover"  style={{width: "10rem"}} >
                           <div id="imagen123"> <img id="imagen" src={product.image}
                                                     onMouseEnter={e => (e.currentTarget.src = product.image2)}
                                                     onMouseLeave={e => (e.currentTarget.src = product.image  )}
                                                     className="img-fluid" alt="image"/></div>
                           <div className="card-body" id="colorblack">
                               <h6 className="card-title">{product.name}</h6>
                               <p className="card-text">Rs. {product.valor}</p>
                               <p>{numStars(product.stars)}</p>
                           </div>
                       </div>

                   </div></div>
           ))}

       </div>
   )
}