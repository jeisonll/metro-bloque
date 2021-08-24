import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export default function CardComponentBlock() {
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover3, setIsHover3] = useState(false)
    const [isHover4, setIsHover4] = useState(false)

    const array = [{
        id: 1,
        name: "Adoquin 6 (Gris)",
        image: "https://metrobloque.com/colores/img/sample_slides/adoquin6gris.jpg",
        medidas: "6x10x20",
        tipo: "Peatonal",
        stars: "5"
    }, {
        id: 2,
        name: "Adoquin 8 (Gris)",
        image: "https://metrobloque.com/colores/img/sample_slides/adoquin8gris.jpg",
        medidas: "8x10x20",
        tipo: "Vehicular",
        stars: "2"
    }, {
        id: 3,
        name: "Adoquin 12 (Gris)",
        image: "https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg",
        medidas: "12x10x20",
        tipo: "Trafico Pesado",
        stars: "3"

    }, {
        id: 4,
        name: "Gramoquin",
        image: "https://metrobloque.com/img/products/gramoquin.jpg",
        medidas: "8x25x25",
        tipo: "Adoquin Ecologico",
        stars: "3"
    }, {
        id: 5,
        name: "Adoquin 10 (Gris)",
        image: "https://metrobloque.com/colores/img/sample_slides/adoquin6gris.jpg",
        medidas: "8x10x25",
        tipo: "Trafico Pesado",
        stars: "5"
    }, {
        id: 6,
        name: "Adoquin 11 (Gris)",
        image: "https://metrobloque.com/colores/img/sample_slides/adoquin8gris.jpg",
        medidas: "8x25x20",
        tipo: "Trafico Pesado",
        stars: "5"
    }, {
        id: 7,
        name: "Adoquin 13 (Gris)",
        image: "https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg",
        medidas: "8x20x25",
        tipo: "Trafico Pesado",
        stars: "4"
    }, {
        id: 8,
        name: "Gramoquin 2",
        image: "https://metrobloque.com/img/products/gramoquin.jpg",
        medidas: "9x25x25",
        tipo: "Adoquin Ecologico",
        stars: "5"
    }
    ]

    return (
        <div className="mb-5">
            <h2 className="text-center mb-4"><img
                src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline.png" alt="separtor"/></h2>
            <h3 className="text-center"><b>FEATURED PRODUCTS</b></h3>
            <div className="container  mt-2 justify-content-center">
                <div className="row  row-cols-2 row-cols-md-2 row-cols-lg-4 mx-5 mx-md-0 mx-lg-0">
                    {array.map((product) => (
                            <div className="col mt-3 text-center  " key={product.id}>
                                <div className="row ">
                                    <div className="card  " onMouseEnter={() => setIsHover2(true)}
                                         onMouseLeave={() => setIsHover2(false)} id="imageHover" style={{width: "18rem"}}>
                                        {!isHover2 && (<img id="imageHoverImg" src={product.image}
                                                            className="card-img-top position-absolute"
                                                            style={{width: "90%", zIndex: "99"}} alt="image"/>
                                        )}
                                        <img id="imageHoverImg"
                                             src={product.image}
                                             className="position-relative" alt="image"/>
                                        <div className="card-body">
                                            <h5 className="card-title "><b>{product.name}</b></h5>
                                            <p className="card-text">
                                                {product.tipo}<br/>
                                                Medidas<br/>
                                                {product.medidas}</p>
                                        </div>
                                        <ul className="list-group list-group-flush text-danger">
                                            <b>ver producto</b>
                                            <div className="d-inline-block"><FontAwesomeIcon icon={faStar}
                                                                                             style={{color: "orange"}}/><FontAwesomeIcon
                                                icon={faStar} style={{color: "orange"}}/><FontAwesomeIcon icon={faStar}
                                                                                                          style={{color: "orange"}}/><FontAwesomeIcon
                                                icon={faStar} style={{color: "orange"}}/><FontAwesomeIcon icon={faStar}
                                                                                                          style={{color: "orange"}}/>
                                            </div>
                                        </ul>
                                        <div className="card-body" id="ClassHover">
                                            <button className="btn opacity-100 text-white">ADD TO CARD</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    )

                    }


                    {/*<div className="col mt-3 text-center">*/}
                    {/*    <div className="row ">*/}
                    {/*        <div className="card  " onMouseEnter={()=>setIsHover3(true)} onMouseLeave={()=>setIsHover3(false)} id="imageHover" style={{width: "18rem"}}>*/}
                    {/*            {!isHover3&&(<img id="imageHoverImg"  src="https://metrobloque.com/colores/img/sample_slides/adoquin8gris.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/colores/img/sample_slides/adoquin8gris.jpg" className="position-relative"  alt="image"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Adoquin 8 (Gris)</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Vehicular<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    8x10x20</p>*/}
                    {/*                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body" id="ClassHover">*/}
                    {/*                <button className="btn opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col mt-3 text-center " >*/}
                    {/*    <div className="row " >*/}
                    {/*        <div className="card position-relative " onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} id="imageHover"style={{width: "18rem"}} >*/}
                    {/*            {!isHover1&&(<img id="imageHoverImg"  src="https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg" className="position-relative"  alt="image"/>*/}

                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Adoquin 12 (Gris)</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Trafico Pesado<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    12x10x20</p>                                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body " id="ClassHover">*/}
                    {/*                <button className="btn rounded-5 opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col mt-3 text-center">*/}
                    {/*    <div className="row ">*/}
                    {/*        <div className="card  " onMouseEnter={()=>setIsHover4(true)} onMouseLeave={()=>setIsHover4(false)} id="imageHover" style={{width: "18rem"}}>*/}
                    {/*            {!isHover4&&(<img id="imageHoverImg"  src="https://metrobloque.com/img/products/gramoquin.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/img/products/gramoquin.jpg" className="position-relative"  alt="image"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Gramoquin</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Adoquin Ecologico<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    8x25x25</p>                                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body" id="ClassHover">*/}
                    {/*                <button className="btn opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col mt-3 text-center " >*/}
                    {/*    <div className="row " >*/}
                    {/*        <div className="card position-relative " onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} id="imageHover"style={{width: "18rem"}} >*/}
                    {/*            {!isHover1&&(<img id="imageHoverImg"  src="https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg" className="position-relative"  alt="image"/>*/}

                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Adoquin 12 (Gris)</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Trafico Pesado<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    12x10x20</p>                                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body " id="ClassHover">*/}
                    {/*                <button className="btn rounded-5 opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col mt-3 text-center">*/}
                    {/*    <div className="row ">*/}
                    {/*        <div className="card  " onMouseEnter={()=>setIsHover4(true)} onMouseLeave={()=>setIsHover4(false)} id="imageHover" style={{width: "18rem"}}>*/}
                    {/*            {!isHover4&&(<img id="imageHoverImg"  src="https://metrobloque.com/img/products/gramoquin.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/img/products/gramoquin.jpg" className="position-relative"  alt="image"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Gramoquin</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Adoquin Ecologico<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    8x25x25</p>                                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body" id="ClassHover">*/}
                    {/*                <button className="btn opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col mt-3 text-center " >*/}
                    {/*    <div className="row " >*/}
                    {/*        <div className="card position-relative " onMouseEnter={()=>setIsHover1(true)} onMouseLeave={()=>setIsHover1(false)} id="imageHover"style={{width: "18rem"}} >*/}
                    {/*            {!isHover1&&(<img id="imageHoverImg"  src="https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/colores/img/sample_slides/adoquin12gris.jpg" className="position-relative"  alt="image"/>*/}

                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Adoquin 12 (Gris)</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Trafico Pesado<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    12x10x20</p>                                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body " id="ClassHover">*/}
                    {/*                <button className="btn rounded-5 opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="col mt-3 text-center">*/}
                    {/*    <div className="row ">*/}
                    {/*        <div className="card  " onMouseEnter={()=>setIsHover4(true)} onMouseLeave={()=>setIsHover4(false)} id="imageHover" style={{width: "18rem"}}>*/}
                    {/*            {!isHover4&&(<img id="imageHoverImg"  src="https://metrobloque.com/img/products/gramoquin.jpg" className="card-img-top position-absolute" style={{width:"90%",zIndex:"99"}} alt="image"/>*/}
                    {/*            )}*/}
                    {/*            <img id="imageHoverImg" src="https://metrobloque.com/img/products/gramoquin.jpg" className="position-relative"  alt="image"/>*/}
                    {/*            <div className="card-body">*/}
                    {/*                <h5 className="card-title "><b>Gramoquin</b></h5>*/}
                    {/*                <p className="card-text">*/}
                    {/*                    Adoquin Ecologico<br/>*/}
                    {/*                    Medidas<br/>*/}
                    {/*                    8x25x25</p>                                </div>*/}
                    {/*            <ul className="list-group list-group-flush text-danger">*/}
                    {/*                <b>Ver Producto</b>*/}
                    {/*                <div className="d-inline-block"><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/><FontAwesomeIcon icon={faStar} style={{color:"orange"}}/>*/}
                    {/*                </div>*/}
                    {/*            </ul>*/}
                    {/*            <div className="card-body" id="ClassHover">*/}
                    {/*                <button className="btn opacity-100 text-white" >ADD TO CARD</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            <style jsx global>
                {`
                  #imageHover:hover #ClassHover {
                    background-color: black !important;
                  }
                  #imageHover:hover {
                    opacity: 100%;
                  }
                  @media screen and (max-width: 560px) {
                    .col {
                      width: 100%;
                    }
                  }
                `}


            </style>
        </div>
    )
}