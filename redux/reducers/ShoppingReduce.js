import {array} from "../../components/array/array";
import {TYPES_CART} from "../actions/ShoppingAction";
import {useEffect} from "react";
import axios from "axios";
import {getProductServices} from "../../services/ProductServices";


export const shoppingInitialState={
  db:[],cart:[]
}
// export const addMovieLocal = (movieData) => {
//     const movieFavoriteExist = movieLocal.find((movie) => movie.id === movieData.id);
//     if (movieFavoriteExist) {
//         const newMovie= Object.assign([], movieLocal);
//         setMovieLocal(newMovie.filter((movie) => movieData.id !== movie.id))
//     } else {
//         const newMovie = Object.assign([], movieLocal);
//         newMovie.push(movieData);
//         setMovieLocal(newMovie);
//     }
//     localStorage.setItem("movieFavorite", JSON.stringify(movieLocal));
// }


export function ShoppingReduce(state , action) {
    switch (action.type) {
        case TYPES_CART.ADD_DATA: {
            return {
                ...state,db:action.payload,cart: [...state.cart]
            }

        }
        case TYPES_CART.ADD_TO_CART: {

           const newItem= state.db.find(product=>product.id===action.payload)
         const exsitsItem=state.cart.find(item=>item.id===newItem.id)
                  return exsitsItem?{...state,cart: state.cart.map(
                      item=>item.id===exsitsItem.id?{...item,quantity:item.quantity+1}:{...item}
                      )}:{
                      ...state,
                      cart: [...state.cart, {...newItem,quantity:1}]
                  }



        }
        case TYPES_CART.REMOVE_ONE_FROM_CART: {
            const itemToDelete=state.cart.find(item=>item.id===action.payload)
            return itemToDelete.quantity>1?{...state,cart: state.cart.map(
                item=>item.id===itemToDelete.id?{...item,quantity:item.quantity-1}:{...item})}
                :{...state,
                    cart: state.cart.filter(item=>item.id!==itemToDelete.id)}

        }
        case TYPES_CART.REMOVE_ALL_FROM_CART: {
            const itemInCart=state.cart.find(item=>item.id===action.payload);
            return {...state,
                        cart: state.cart.filter(item=>item.id!==action.payload)}
        }
        case TYPES_CART.CLEAR_CART:
            return shoppingInitialState
        default:
            return state;
    }
}