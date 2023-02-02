import { createSelector } from '@reduxjs/toolkit';

const cartItemSelector = (state) => state.cart;

//count number of products in cart

export const cartItemsCountSelector = createSelector(cartItemSelector, (carrtItems) =>
    carrtItems.reduce((count, item) => count + item.quantity, 0),
);

//count number of products in cart

export const cartTotalCountSelector = createSelector(cartItemSelector, (carrtItems) =>
    carrtItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0),
);
