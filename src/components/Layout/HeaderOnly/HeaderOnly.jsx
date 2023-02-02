import Header from '../DefaultLayout/Header/Header';
import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container w-[1200px]')}>
                <div className={cx('')}>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
