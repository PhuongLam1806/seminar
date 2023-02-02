import React from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import ProductFilters from '../../../../pages/Home/components/ProductFilters';

const cx = classNames.bind(styles);

function Sidebar() {
    return <div className={cx('wrapper')}>{/* <ProductFilters /> */}</div>;
}

export default Sidebar;
