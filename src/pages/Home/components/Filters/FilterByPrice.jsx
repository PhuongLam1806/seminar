import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';
import styles from './FilterByPrice.module.scss';
import classNames from 'classnames/bind';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const cx = classNames.bind(styles);

function FilterByPrice({ onChange }) {
    const [values, setvalues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setvalues((preState) => ({
            ...preState,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        console.log('??', values);
        if (!onChange) return;
        if (onChange) onChange(values);
    };
    return (
        <Box className={cx('wrapper')}>
            <Typography>GIÁ</Typography>
            <Box className={cx('range')}>
                <TextField
                    variant="standard"
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                />
                <span className={cx('m-1')}> - </span>
                <TextField
                    variant="standard"
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                />
            </Box>
            <Button variant="outlined" color="primary" onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;
