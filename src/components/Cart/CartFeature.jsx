import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemsCountSelector, cartTotalCountSelector } from './selector';
import { addCart, delCart, plusCart, removeCart } from '../redux/action';
import styles from './CartFeature.module.scss';
import classNames from 'classnames/bind';

CartFeature.propTypes = {};

const cx = classNames.bind(styles);

function CartFeature(props) {
    const dispatch = useDispatch();
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

    // const thumnailUrl = product.thumbnail
    //     ? `https://api.ezfrontend.com${product.thumbnail?.url}`
    //     : `https://via.placeholder.com/200`;

    return (
        <div>
            <div class="container   mx-auto mt-10">
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
                ))}

                {quantity ? (
                    <>
                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div id="summary" class="sm:w-1/4 mbi:w-full flex justify-between float-right px-8 py-10">
                            <div class="flex justify-between ">
                                <span class="font-semibold text-sm ">Items: {quantity}</span>
                                {/* <span class="font-semibold text-sm">590$</span> */}
                            </div>
                            <div class="">
                                <div class="flex font-semibold justify-between  text-sm ">
                                    <span>
                                        Total cost: $
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                            total,
                                        )}{' '}
                                    </span>
                                    <span> </span>
                                </div>
                                <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm mt-2 text-white uppercase w-full">
                                    Thanh Toán
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <span class="text-5xl">Your cart is empty</span>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartFeature;
