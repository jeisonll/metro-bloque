import React, {Component, useEffect} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Slaider(){
useEffect(()=>{

},[])
    return(

        <div >



           <Carousel className="carousel-inner">
            <div className=" carousel-inner__image">

                <div className="row">
                    <div className="col-6 bg-light">
                        <img src="https://cdn.shopify.com/s/files/1/0179/0453/3558/files/mobslider2_767x.jpg" />
                    </div><div className="col-6 bg-light">

                <div className="css-typing ">
                            <h1 className="textTranslate" style={{color:"red"}}>moder power tools</h1>
                            <button className="btn btn-warning">get start</button>
                        </div>
                    </div>

                </div>
            {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div className=" carousel-inner__image">
                <div className="row">
                    <div className="col-6 bg-light">
                        <div className="css-typing ">
                            <h1 className="textTranslate" style={
                                {color:"green"
                                        }}>moder power tools</h1>
                            <button className="btn btn-warning">get start</button>
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
                           <div className="container  bg-white position-absolute bg-opacity-75"style={{marginLeft:"10%",textAlign: "center !important" }}>
                               <div className="css-typing p-5 ">
                                   <h1 className="textTranslate" style={{color:"darkblue",marginLeft:"15%",marginBottom:"2%"}}>moder power tools</h1>
                                   <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                                   <button className="btn btn-warning">get start</button>
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
