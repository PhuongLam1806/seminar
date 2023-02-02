import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styles from './ProductThumbnail.module.scss';
import classNames from 'classnames/bind';

ProductThumbnail.propTypes = {};

const cx = classNames.bind(styles);

function ProductThumbnail({ product }) {
    const thumnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail?.url}`
        : `https://via.placeholder.com/200`;
    return (
        <div className={cx('wrap')}>
            <Box>
                <img src={thumnailUrl} className={cx('thumbnail')} alt={product.name} />
            </Box>
        </div>
    );
}

export default ProductThumbnail;
