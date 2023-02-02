import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../components/Auth/userSlice';
import cart from '../components/Cart/cartSlice';

// const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
    user: userReducer,
    cart,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
