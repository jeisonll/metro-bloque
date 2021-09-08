import React from "react";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function CardBlock({loadingButton,data, addToCard}) {
    const {id, image, category, price, title} = data
    return (
        <div className="col mt-3 text-center ">
            <div className="row ">
                <div className="card   " id="imageHover" style={{height: "32rem", width: "18rem"}}>
                    <div id="imagen123">
                        <img id="imagen" src={image} style={{height: "12em"}}
                             className="img-fluid" alt="image"/>
                    </div>
                    <div className="card-body   " style={{alignItems: "center"}}>
                        <h5 className="card-title align-items-center"><b>{title}</b></h5>
                        <p className="card-text">
                            {category}<br/>
                            price<br/>
                            {price}</p>
                    </div>
                    <ul className="list-group list-group-flush text-danger">
                        <b>ver producto</b>
                    </ul>
                    <div className="card-footer bg-white" id="ClassHover">
                        <button onClick={() => addToCard(data)} className="btn opacity-100 text-white w-100  border-0">
                            {!loadingButton[id]?"ADD TO CARD":<FontAwesomeIcon className="fa-spin fa-2x d-block mx-3 text-center" icon={faSpinner} style={{color: "white"}}/>}


                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}