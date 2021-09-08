import {TYPES_CART} from "../actions/ShoppingAction";
import {acounItem, totalValue} from "../../utils";


export const shoppingInitialState = {
    db: [], cart: [], total: 0, item: 0
}


export function ShoppingReduce(state = shoppingInitialState, action) {
    switch (action.type) {
        case TYPES_CART.ADD_DATA_DB: {
            return {
                ...state, db: action.payload
            }
        }
        case TYPES_CART.ADD_DATA_CART: {
            return {
                ...state, cart: action.payload, total: totalValue(action.payload), item: acounItem(action.payload)

            }
        }
        case TYPES_CART.ADD_TO_CART: {

            const existItem = state.cart.find(item => item.id === action.payload.id)
            const cartNew = [...state.cart, {...action.payload, quantity: 1}]
            const cartExist = state.cart.map(item => item.id === action.payload.id ?
                {...item, quantity: item.quantity + 1} : {...item})
            return existItem ? {
                ...state,
                cart: cartExist,
                total: totalValue(cartExist),
                item: acounItem(cartExist)
            } : {
                ...state,
                cart: cartNew,
                total: totalValue(cartNew),
                item: acounItem(cartNew)

            }
        }


        case TYPES_CART.REMOVE_ONE_FROM_CART: {
            const itemToDelete = state.cart.find(item => item.id === action.payload)
            const cartNew= state.cart.filter(item => item.id !== itemToDelete.id);
            const cartExist=state.cart.map(
                    item => item.id === itemToDelete.id ? {...item, quantity: item.quantity - 1} : {...item})
            return itemToDelete.quantity > 1 ? {
                    ...state,
                    cart: cartExist,
                    total: totalValue(cartExist),
                    item: acounItem(cartExist)
                }
                : {
                    ...state,
                    cart:cartNew ,
                    total: totalValue(cartNew),
                    item: acounItem(cartNew)
                }

        }
        case TYPES_CART.REMOVE_ALL_FROM_CART: {
            // const itemInCart = state.cart.find(item => item.id === action.payload);
            const newCart=state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,

                cart:newCart ,
                total: totalValue(newCart),
                item: acounItem(newCart)
            }
        }
        case TYPES_CART.CLEAR_CART:
            return {
                ...state,
                cart: [], total: [], item: []
            }
        default:
            return state;
    }
}