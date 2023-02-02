import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import styles from './ProductInfo.module.scss';
import classNames from 'classnames/bind';

ProductInfo.propTypes = {
    product: PropTypes.object,
};

const cx = classNames.bind(styles);

function ProductInfo({ product = {} }) {
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;
    return (
        <Box className={cx('wrapper')}>
            <Typography component="h1" variant="h4">
                {name.toUpperCase()}
            </Typography>
            <Typography variant="body2" className={cx('description')}>
                {shortDescription}
            </Typography>

            <Box className={cx('priceBox')}>
                <Box component="span" variant="h4" className={cx('salePrice')}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(salePrice)}
                </Box>

                {promotionPercent > 0 && (
                    <>
                        <Box component="span" className={cx('originalPrice')}>
                            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                originalPrice,
                            )}
                        </Box>
                        <Box component="span" className={cx('promotionPercent')}>
                            {`-${promotionPercent}%`}
                        </Box>
                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductInfo;
