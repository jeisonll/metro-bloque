import {TYPES_CART} from "../actions/ShoppingAction";
import {totalValue} from "../../utils";


export const shoppingInitialState = {
    db: [], cart: [],total:0
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
                ...state, cart: action.payload,total: totalValue(action.payload)

            }
        }

        case TYPES_CART.ADD_TO_CART: {
            const existItem = state.cart.find(item => item.id === action.payload.id)

            return existItem ? {
                ...state,
                cart: state.cart.map(
                    item => item.id === existItem.id ?
                        {...item, quantity: item.quantity + 1} : {...item}
                ),total: totalValue(state.cart)

            } : {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]

                ,total: totalValue(state.cart)

            }
        }


        case TYPES_CART.REMOVE_ONE_FROM_CART: {
            const itemToDelete = state.cart.find(item => item.id === action.payload)
            return itemToDelete.quantity > 1 ? {
                    ...state, cart: state.cart.map(
                        item => item.id === itemToDelete.id ? {...item, quantity: item.quantity - 1} : {...item}),total: totalValue(action.payload)
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id),total: totalValue(state.cart)
                }

        }
        case TYPES_CART.REMOVE_ALL_FROM_CART: {
            // const itemInCart = state.cart.find(item => item.id === action.payload);
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),total: totalValue(state.cart)
            }
        }
        case TYPES_CART.CLEAR_CART:
            return {
                ...state,
                cart: [],total:[]
            }
        default:
            return state;
    }
}