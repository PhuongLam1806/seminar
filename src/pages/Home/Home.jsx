import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import productAPI from '../../api/productsAPI';
import { useState } from 'react';
import { Box, Container, Grid, Pagination, Paper, Typography } from '@mui/material';
import ProductSkeleton from './components/ProductSkeleton';
import styles from './Home.module.scss';
import queryString from 'query-string';
import classNames from 'classnames/bind';
import ProductList from './components/ProductList';
import ProductSort from './components/ProductSort';
import Sidebar from '../../components/Layout/DefaultLayout/Sidebar/Sidebar';
import ProductFilters from './components/ProductFilters';
import FilterViewer from './components/FilterViewer';
import { useLocation, useNavigate } from 'react-router-dom';
Home.propTypes = {};

const cx = classNames.bind(styles);

function Home(props) {
    const naviagte = useNavigate();
    const location = useLocation();
    const queryParams = queryString.parse(location.search);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        toal: 10,
        page: 1,
    });
    const [loading, setLoading] = useState(true);
    // const [filters, setFilters] = useState({
    //     _page: 1,
    //     _limit: 12,
    //     _sort: 'salePrice:ASC',
    // });

    const [filters, setFilters] = useState({
        ...queryParams,
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 9,
        _sort: queryParams._sort || 'salePrice:ASC',
    });

    useEffect(() => {
        naviagte({
            pathname: location.pathname,
            search: queryString.stringify(filters),
        });
    }, [naviagte, filters]);

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productAPI.getAll(filters);
                setProductList(data);
                setPagination(pagination);
                // console.log({ data, pagination });
            } catch (error) {
                console.log('failed to fetch product list', error);
            }

            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _page: page,
        }));
    };

    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            _sort: newSortValue,
        }));
    };

    const handleFilterChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        }));
    };

    const setNewFilters = (newFilters) => {
        setFilters(newFilters);
    };
    return (
        <Box>
            <Container maxWidth="xl">
                {/* <ProductFilters /> */}
                <Grid container spacing={3} className={cx('w[200]')}>
                    <Grid item xs={2}>
                        <Paper elevation={1}>
                            <ProductFilters filters={filters} onChange={handleFilterChange} />
                        </Paper>
                    </Grid>
                    <Grid item xs={10}>
                        <Paper elevation={1}>
                            <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                            {/* <FilterViewer filters={filters} onChange={setNewFilters} /> */}
                            <FilterViewer filters={filters} onChange={setNewFilters} />
                            {loading ? <ProductSkeleton length={12} /> : <ProductList data={productList} />}
                            <Box className={cx('pagination')}>
                                <Pagination
                                    color="primary"
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                ></Pagination>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Home;
