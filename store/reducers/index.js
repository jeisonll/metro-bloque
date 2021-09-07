import {combineReducers} from "redux";
import ProductsReducer from "./ProductsReduer";
import {ShoppingReduce} from "./ShoppingReduce";


const rootReducer = combineReducers({
    ShoppingReduce
});

export default rootReducer;