// add Item to Cart

export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product,
    };
};

// add Delete from Cart

export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product,
    };
};

export const plusCart = (product) => {
    return {
        type: 'PLUSITEM',
        payload: product,
    };
};

export const removeCart = (product) => {
    return {
        type: 'REMOVEITEM',
        payload: product,
    };
};
