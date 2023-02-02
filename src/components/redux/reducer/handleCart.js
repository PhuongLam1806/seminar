const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    console.log('á', product);

    switch (action.type) {
        case 'ADDITEM':
            //check if product already exists
            const exist = state.find((x) => x.id === product.id);
            console.log('producttt', exist);

            if (exist) {
                //Increase the quantity
                return state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x));
            } else {
                // const product = action.payload;
                // return [
                //     ...state,
                //     {
                //         ...product,
                //         quantity: 1,
                //     },
                // ];
            }
            break;

        case 'DELITEM':
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.quantity === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity - 1 } : x));
            }

            break;

        default:
            return state;
            break;
    }
};

export default handleCart;
