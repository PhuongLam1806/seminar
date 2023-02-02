import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const Navigate = useNavigate();
    const thumnailUrl = product.thumbnail
        ? `https://api.ezfrontend.com${product.thumbnail?.url}`
        : `https://via.placeholder.com/200`;

    console.log('anh', product);
    const handleClick = () => {
        Navigate(`${product.id}`);
    };

    return (
        <Box padding={1} onClick={handleClick}>
            {/* <Skeleton variant="rectangular" width="100%" height={150} /> */}
            <Box padding={1} minHeight="215px">
                <img src={thumnailUrl} width="100%" alt={product.name} />
            </Box>
            <Typography variant="body2">{product.name}</Typography>
            <Typography variant="body2">
                <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? `-${product.promotionPercent}%` : ''}
            </Typography>
        </Box>
    );
}

export default Product;
