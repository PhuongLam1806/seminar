import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalCountSelector } from './selector';
import { addCart, delCart, plusCart, removeCart } from '../redux/action';
import styles from './CartFeature.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

CartFeature.propTypes = {};

const cx = classNames.bind(styles);

function CartFeature(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const total = useSelector(cartTotalCountSelector);
    const quantity = useSelector(cartItemsCountSelector);
    const products = useSelector((state) => state.cart);
    console.log('ádad', products);
    const handleRemove = (state) => {
        dispatch(removeCart(state));
    };
    const handleQuantityDown = (state) => {
        dispatch(delCart(state));
    };

    const handleQuantityPlus = (state) => {
        dispatch(plusCart(state));
    };

    const handleToShopping = () => {
        navigate('/');
    };

    // const thumnailUrl = product.thumbnail
    //     ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    //     : `https://via.placeholder.com/200`;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickCheckOut = () => {
        const token = localStorage.getItem('token');
        if (token && quantity > 0) {
            navigate('/profile');
        } else {
            setOpen(true);
        }
    };

    return (
        <div>
            {/* <div class="container   mx-auto mt-10">
                {products.map((product) => (
                    <div key={product.id} class="flex justify-center rounded-2xl bg-[#cccccc30] shadow-md my-10 ">
                        <div class="w-3/4  px-10 py-10">
                            <div class="sm:flex mbi:hidden mt-10 mb-5">
                                <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                    Quantity
                                </h3>
                                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                    Price
                                </h3>
                                <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                    Total
                                </h3>
                            </div>
                            <div class="flex mbi:flex-col sm:flex-row items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex mbi:w-full sm:w-2/5">
                                    <div class="w-20">
                                        <img
                                            class="h-24"
                                            src={
                                                product.product.thumbnail
                                                    ? `https://api.ezfrontend.com${product.product.thumbnail?.url}`
                                                    : `https://via.placeholder.com/200`
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                        <span class="font-bold text-sm">{product.product.name}</span>
                                        <span class="text-blue-500 text-xs">-{product.product.promotionPercent}%</span>
                                        <button
                                            href="#"
                                            class="font-semibold hover:text-red-500 text-gray-500 text-xs flex"
                                            onClick={() => handleRemove(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div class="flex justify-center w-1/5">
                                    <button onClick={() => handleQuantityDown(product)}>
                                        <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </button>

                                    <input class="mx-2 border text-center w-8" type="text" value={product.quantity} />

                                    <button onClick={() => handleQuantityPlus(product)}>
                                        <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </button>
                                </div>
                                <span class="text-center w-1/5 font-semibold text-sm">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        product.product.salePrice,
                                    )}
                                </span>
                                <span class="text-center w-1/5 font-semibold text-sm">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        product.product.salePrice * product.quantity,
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                ))} */}

            <div className="container mx-auto mt-10">
                <div className="md:flex md:flex-row shadow-md my-10 mbi:flex-col">
                    <div className="md:w-3/4 mbi:w-full bg-white px-10 py-10">
                        <div className="flex justify-between border-b pb-8">
                            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                            <h2 className="font-semibold text-2xl">{quantity} Items</h2>
                        </div>
                        <div className="md:flex mbi:hidden mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                Quantity
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                Price
                            </h3>
                            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                                Total
                            </h3>
                        </div>

                        {products.map((product) => (
                            <div className="flex mbi:flex-col md:flex-row items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div className="flex md:w-2/5 mbi:w-full ">
                                    <div className="w-20">
                                        <img
                                            className="h-24"
                                            src={
                                                product.product.thumbnail
                                                    ? `https://api.ezfrontend.com${product.product.thumbnail?.url}`
                                                    : `https://via.placeholder.com/200`
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between ml-4 flex-grow">
                                        <span className="font-bold text-sm">{product.product.name}</span>
                                        <span className="text-red-500 text-xs">
                                            -{product.product.promotionPercent}%
                                        </span>
                                        <button
                                            href="#"
                                            className="font-semibold hover:text-red-500 text-gray-500 text-xs flex"
                                            onClick={() => handleRemove(product.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center w-1/5">
                                    <button onClick={() => handleQuantityDown(product)}>
                                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </button>

                                    <input
                                        className="mx-2 border text-center w-8"
                                        type="text"
                                        value={product.quantity}
                                    />

                                    <button onClick={() => handleQuantityPlus(product)}>
                                        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                        </svg>
                                    </button>
                                </div>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        product.product.salePrice,
                                    )}
                                </span>
                                <span className="text-center w-1/5 font-semibold text-sm">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        product.product.salePrice * product.quantity,
                                    )}
                                </span>
                            </div>
                        ))}

                        <a
                            href="#"
                            onClick={handleToShopping}
                            className="flex font-semibold text-indigo-600 text-sm mt-10"
                        >
                            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                            </svg>
                            Continue Shopping
                        </a>
                    </div>

                    <div id="summary" className="md:w-1/4 mbi:w-full px-8 py-10">
                        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div className="flex justify-between mt-10 mb-5">
                            <span className="font-semibold text-sm uppercase">Items {quantity}</span>
                            <span>
                                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}{' '}
                            </span>
                        </div>
                        <div>
                            <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                            <select className="block p-2 text-gray-600 w-full text-sm">
                                <option>
                                    Standard shipping -{' '}
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        10000,
                                    )}
                                </option>
                            </select>
                        </div>
                        <div className="py-10">
                            <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                                Promo Code
                            </label>
                            <input
                                type="text"
                                id="promo"
                                placeholder="Enter your code"
                                className="p-2 text-sm w-full"
                            />
                        </div>
                        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                            Apply
                        </button>
                        <div className="border-t mt-8">
                            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>
                                    {' '}
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                        total + (quantity ? 10000 : 0),
                                    )}{' '}
                                </span>
                            </div>
                            <button
                                onClick={handleClickCheckOut}
                                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{'You need to login to check out your cart'}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CartFeature;
