import {get} from "../network";

export const getProductServices=()=>{
   return get("/products");
}