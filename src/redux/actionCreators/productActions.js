const { ADD_TO_CART } = require("../actionTypes/actionTypes")

export const addToCart = (product) =>{
    return {
        type: ADD_TO_CART,
        payload: product,
    }
}