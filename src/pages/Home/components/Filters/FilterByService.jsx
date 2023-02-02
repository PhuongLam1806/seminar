import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import styles from './FilterByPrice.module.scss';
import classNames from 'classnames/bind';
import { CheckBox } from '@mui/icons-material';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const cx = classNames.bind(styles);

function FilterByService({ filters = {}, onChange }) {
    // const [values, setvalues] = useState({
    //     isPromotion: Boolean(filters.isPromotion),
    //     isFreeShip: Boolean(filters.isFreeShip),
    // });

    const handleChange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        // setvalues((preState) => ({
        //     ...preState,
        //     [name]: checked,
        // }));

        onChange({ [name]: checked });
    };

    return (
        <Box className={cx('wrapper')}>
            <Typography>DỊCH VỤ</Typography>

            <ul>
                {[
                    { value: 'isPromotion', label: 'Có khuyến mãi' },
                    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
                ].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;
