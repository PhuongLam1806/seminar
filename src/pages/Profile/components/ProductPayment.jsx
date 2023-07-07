import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

ProductPayment.propTypes = {};

function ProductPayment(props) {
    const products = useSelector((state) => state.cart);
    // console.log('payment', products);
    return (
        <div>
            <ul>
                {products.map((product, index) => (
                    <div className="flex items-center mt-3">
                        <div className="w-20">
                            <img
                                className="h-20"
                                src={
                                    product.product.thumbnail
                                        ? `https://api.ezfrontend.com${product.product.thumbnail?.url}`
                                        : `https://via.placeholder.com/200`
                                }
                                alt=""
                            />
                        </div>
                        <li className="ml-2">{product.product.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ProductPayment;
