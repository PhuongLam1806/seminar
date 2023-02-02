// import { createSlice } from '@reduxjs/toolkit';
// // const cartItems = []
// // const cart = [];

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         showMiniCart: false,
//         cartItems: ([] = []),
//     },
//     reducers: {
//         showMiniCart(state) {
//             state.showMiniCart = true;
//         },

//         hideMiniCart(state) {
//             state.showMiniCart = false;
//         },

//         addToCart(state, action) {
//             // newItem = {id, product, quantity}

//             const newItem = action.payload;
//             console.log('type', typeof state.cartItems);
//             const index = state.cartItems.find((item) => item.id === newItem.id);

//             console.log('state', state);
//             if (index >= 0) {
//                 //increase quantity
//                 // state.cartItems[index].quantity += newItem.quantity;
//                 return state.cartItems.map((x) => (x.id === newItem.id ? { ...x, quantity: x.quantity + 1 } : x));
//             } else {
//                 //add to cart
//                 // state.cartItems[index].push(newItem);

//                 const newItem = action.payload;
//                 return ([
//                     ...state.cartItems,
//                     {
//                         ...newItem,
//                         quantity: 1,
//                     },

//                 ]);
//             }

//             // const product = action.payload;
//             // const exist = state.cartItems.find((x) => x.id === product.id);
//             // if (exist) {
//             //     //Increase the quantity
//             //     return state.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
//             // } else {
//             //     return [
//             //         ...state,
//             //         {
//             //             ...product,
//             //             qty: 1,
//             //         },
//             //     ];
//             // }
//         },

//         setQuantity(state, action) {
//             const { id, quantity } = state.payload;
//             //check if product is available in cart
//             const index = state.cartItems.findIndex((x) => x.id === id);
//             if (index >= 0) {
//                 state.cartItems[index].quantity = quantity;
//             }
//         },

//         removeFromCart(state, action) {
//             const idNeedToRemove = action.payload;
//             state.cartItems = state.cartItems.filter((x) => x.id !== idNeedToRemove);
//         },
//     },
// });

// const { actions, reducer } = cartSlice;
// export const { showMiniCart, hideMiniCart, addToCart, setQuantity, removeFromCart } = actions;
// export default reducer;

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    console.log('á', product);

    switch (action.type) {
        case 'ADDITEM':
            //check if product already exists
            const exist = state.find((x) => x.id === product.id);
            console.log('producttt', state);

            if (exist) {
                //Increase the quantity
                return state.map((x) => (x.id === product.id ? { ...x, quantity: x.quantity + product.quantity } : x));
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    },
                ];
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
