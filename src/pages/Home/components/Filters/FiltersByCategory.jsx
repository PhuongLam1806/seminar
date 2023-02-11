import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useState } from 'react';
import categoryApi from '../../../../api/categoryAPI';
import styles from './FiltersByCategory.module.scss';
import classNames from 'classnames/bind';

FiltersByCategory.propTypes = {
    onchange: PropTypes.func,
};

const cx = classNames.bind(styles);

function FiltersByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                console.log('hh', list);
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    })),
                );
            } catch (error) {
                console.log('fail to fetch category list ', error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('category')}>DANH MỤC SẢN PHẨM</h4>

            <ul className={cx('sidebar')}>
                {categoryList.map((category, index) => (
                    <li onClick={() => handleCategoryClick(category)} key={category.id}>
                        {category.id}.{category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FiltersByCategory;
