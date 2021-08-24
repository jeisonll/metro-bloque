import React, {Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slaider(){
useEffect(()=>{

},[])
    return(

        <div >

            {/*<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">*/}
            {/*    <div className="carousel-indicators">*/}
            {/*        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"*/}
            {/*                className="active" aria-current="true" aria-label="Slide 1"></button>*/}
            {/*        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"*/}
            {/*                aria-label="Slide 2"></button>*/}
            {/*        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"*/}
            {/*                aria-label="Slide 3"></button>*/}
            {/*    </div>*/}
            {/*    <div className="carousel-inner">*/}
            {/*        <div className="carousel-item active">*/}
            {/*            <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider2_767x.jpg" className="d-block w-100" alt="..."/>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider1_767x.jpg" className="d-block w-100" alt="..."/>*/}
            {/*        </div>*/}
            {/*        <div className="carousel-item">*/}
            {/*            <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider1_767x.jpg" className="d-block w-100" alt="..."/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"*/}
            {/*            data-bs-slide="prev">*/}
            {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Previous</span>*/}
            {/*    </button>*/}
            {/*    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"*/}
            {/*            data-bs-slide="next">*/}
            {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
            {/*        <span className="visually-hidden">Next</span>*/}
            {/*    </button>*/}
            {/*</div>*/}

           <Carousel className="carousel-inner">
            <div className=" carousel-inner__image">

                <div className="row">
                    <div className="col-6 bg-light">
                        <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider2_767x.jpg" />
                    </div><div className="col-6 bg-light">

                <div className="css-typing ">
                            <h1 className="textTranslate" style={{color:"black"}}>Power Tool Accessories</h1>
                            <h2 className="textTranslate" style={{color:"#D72406"}}>Cordless Power Tool</h2>
                    <p>Nullam dictum felis eu pede mollis pretium.<br/>Integer tincidunt. Cras dapi bus.<br/> Vivamus elementum semper nisi.</p>
                            <button className="btn btn-warning">Shop Now</button>
                        </div>
                    </div>

                </div>
            {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div className=" carousel-inner__image">
                <div className="row">
                    <div className="col-6 bg-light">
                        <div className="css-typing ">
                            <h1 className="textTranslate" style={{color:"black"}}>Modern Power Tool</h1>
                            <h2 className="textTranslate" style={{color:"#D72406"}}>Hardware Equipments &<br/>Accessories Shop!</h2>
                            <p>Nullam dictum felis eu pede mollis pretium.<br/>Integer tincidunt. Cras dapi bus.<br/> Vivamus elementum semper nisi.</p>
                            <button className="btn btn-warning">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-6 bg-light">
                        <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider1_767x.jpg" />
                    </div>
                </div>
            {/*<p className="legend">Legend 2</p>*/}
            </div>
               <div className=" carousel-inner__image">
                   <div className="row" >
                       <div className="imagenumber">
                           <div className="container  bg-white position-absolute bg-opacity-75"style={{marginLeft:"10%",marginRight:"10%", textAlign: "center !important" }}>
                               <div className="css-typing p-5 ">
                                   <h1 className="textTranslate" style={{color:"black"}}>Modern Power Tool</h1>
                                   <h2 className="textTranslate" style={{color:"#D72406"}}>Hardware Equipments &<br/>Accessories Shop!</h2>
                                   <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt.<br/> Cras dapi bus. Vivamus elementum semper nisi.</p>
                                   <button className="btn btn-warning">Shop Now</button>
                               </div>
                           </div>

                           <img  src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider3_767x.jpg" />
                       </div>
                   </div>
            {/*<p className="legend">Legend 3</p>*/}
            </div>
            </Carousel>

            <style jsx global>
                {`.carousel-inner__image{
                      
                    max-height: 77vh !important;
                    
                    }
                     .carousel-inner__image h1{
                       margin-top: 10%;
                       
                     }
                     .carousel-inner__image h1{
                       
                     }
                     .imagenumber{
                     position: center;
                     left: 50%;
                     
                     }
                    .imagenumber img{
                     width: 10%;
                     height: 40%;
                    }
                                       
                   ////////////////
                   

                .css-typing h1 {
                
    border-right: .15em solid white;
    white-space: nowrap;
    overflow: hidden;
}

.css-typing h1:nth-child(1) {
    width: 20em;
    -webkit-animation: type 5s steps(40, end), blink .5s step-end infinite alternate;
    animation: type 5s steps(40, end), blink .5s step-end infinite alternate;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    animation-iteration-count:infinite;
}


@keyframes type {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes type {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: transparent;
  }
}
            `}
            </style>
        </div>

    )
}
