import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../../../components/Layout/DefaultLayout/Sidebar/Sidebar';
import { Box } from '@mui/system';
import FiltersByCategory from './Filters/FiltersByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!onChange) return;
        const newFilters = {
            'category.id': newCategoryId,
        };
        onChange(newFilters);
    };

    const handleChange = (values) => {
        // if (!onChange) return;
        // console.log(values);
        if (onChange) onChange(values);
    };
    return (
        <Box>
            <FiltersByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilters;
