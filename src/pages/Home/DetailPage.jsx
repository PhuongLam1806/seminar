import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper } from '@mui/material';
import styles from './DetailPage.module.scss';
import classNames from 'classnames/bind';
import ProductThumbnail from './components/ProductThumbnail';
import { useMatch, useParams } from 'react-router-dom';
import useProductDetail from '../../hooks/useProductDetail';
import ProductInfo from './components/ProductInfo';
import AddToCartForm from './components/AddToCartForm';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../components/Cart/cartSlice';
import { addCart } from '../../components/redux/action';

DetailPage.propTypes = {};

const cx = classNames.bind(styles);

function DetailPage(props) {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.handleCart);
    console.log('state', state);

    const { product, loading } = useProductDetail(productId);

    if (loading) {
        return <Box>Loading</Box>;
    }

    const handleAddToCartSubmit = ({ quantity }) => {
        // console.log('formvalues', formValues);
        const action = addCart({
            id: product.id,
            product,
            quantity,
        });
        console.log('action', action);
        // dispatch(addCart(item));
        dispatch(action);
    };

    return (
        <div className="mt-10">
            <Box>
                <Container>
                    <Paper elevation={0}>
                        <Grid container className={cx('wrap')}>
                            <Grid xs={4} className={cx('left')}>
                                <ProductThumbnail product={product} />
                            </Grid>
                            <Grid xs={8} className={cx('right')}>
                                <ProductInfo product={product} />
                                <AddToCartForm onSubmit={handleAddToCartSubmit} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </div>
    );
}

export default DetailPage;
