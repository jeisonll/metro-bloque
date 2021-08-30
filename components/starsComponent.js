import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React from "react";


 export default function numStars(stars){
        const contStars = [];
        for (let i = 0; i < stars; i++) {
            contStars.push(<FontAwesomeIcon icon={faStar} style={{color: "orange"}}/>)
        }
        return contStars;
    }

