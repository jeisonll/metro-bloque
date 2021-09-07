import {put, call,takeLatest} from "redux-saga/effects"
import {TYPES_PRODUCT} from "../actions/ShoppingAction";
function* getProduct({payload}){
    try {
        console.log("the function success")
    }catch (err){
        console.log("the function not success")
    }
}
export default function* products(){
    yield takeLatest(TYPES_PRODUCT.START_GET_PRODUCT,getProduct)
}