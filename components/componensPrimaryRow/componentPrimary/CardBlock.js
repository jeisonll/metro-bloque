import React from "react";


export default function CardBlock({title,image,category,price}){

    return(
    <div className="card   "  id="imageHover" style={{height: "32rem",width:"18rem"}}>
        <div id="imagen123">
            <img id="imagen" src={image} style={{height:"12em"}}
                // onMouseEnter={e => (e.currentTarget.src = product.image2)}
                // onMouseLeave={e => (e.currentTarget.src = product.image)}
                 className="img-fluid" alt="image"/>
        </div>
        <div className="card-body   "style={{alignItems:"center"}}>
            <h5 className="card-title align-items-center"><b>{title}</b></h5>
            <p className="card-text">
                {category}<br/>
                price<br/>
                {price}</p>
        </div>
        <ul className="list-group list-group-flush text-danger">
            <b>ver producto</b>
            {/*<div className="d-inline-block">{numStars(product.stars)}*/}
            {/*</div>*/}
        </ul>
        <div className="card-footer bg-white" id="ClassHover">
            <button className="btn opacity-100 text-white">ADD TO CARD</button>
        </div>
    </div>
)
}