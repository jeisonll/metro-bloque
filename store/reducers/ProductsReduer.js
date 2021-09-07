const initialState = {
    db:[],cart:[]
}
const ProductsReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return {
                ...state,
                db:action.payload
            }

        default:
            return state;
    }
}


export default ProductsReducer;