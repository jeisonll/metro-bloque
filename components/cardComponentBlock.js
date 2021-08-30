import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import CardBlockRow from "./componensPrimaryRow/cardBlockRow";

export default function CardComponentBlock() {
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover3, setIsHover3] = useState(false)
    const [isHover4, setIsHover4] = useState(false)



    const [newImg, setNewImg] = useState(null);
    return (
        <div className="mb-5">
            <h2 className="text-center mb-4"><img
                src="https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline.png" alt="separtor"/></h2>
            <h3 className="text-center"><b>FEATURED PRODUCTS</b></h3>
            <div className="container  mt-2 justify-content-center">
                <div className="row  row-cols-2 row-cols-md-2 row-cols-lg-4 mx-5 mx-md-0 mx-lg-0">
                    <CardBlockRow/>
                </div>
            </div>
            <style jsx global>
                {`
                  #imageHover:hover #ClassHover {
                    background-color: black !important;

                  }

                  #imagen123 {
                    overflow: hidden;
                  }

                  #imageHover:hover #imagen {
                    transform: scale(1.5);
                    transition: 1s;
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