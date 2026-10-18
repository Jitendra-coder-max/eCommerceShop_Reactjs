// to add item in cart

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

//  to delere item from cart
export const dltCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}