const addToCart = (prev) => {
    return {
        type: "ADD_TO_CART",
        payload: prev,
    };
};
const removeFromCart = (id) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: id,
    };
};
