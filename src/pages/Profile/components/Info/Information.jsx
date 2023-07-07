import React, { useState } from 'react';
import styles from './Information.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

Information.propTypes = {};

function Information({ onGet }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');
    // const handleClickname = (e) => {
    //     setName(e.target.value);
    //     onGet(name);
    //     console.log({ name: name });
    // };
    if (setName) {
        onGet(name, phone, address, note, email);
    }
    return (
        <div>
            <h2>Họ tên*</h2>
            <input className={cx('box')} type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <h2>Số điện thoại*</h2>
            <input className={cx('box')} type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <h2>Email*</h2>
            <input className={cx('box')} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

            <h2>Địa chỉ*</h2>
            <input className={cx('box')} type="text" value={address} onChange={(e) => setAddress(e.target.value)} />

            <h2>
                {' '}
                <label for="note">Ghi chú</label>
            </h2>
            <textarea
                id="note"
                className={cx('note', '')}
                type="text"
                // height="50px"
                rows="6"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            {/* <textarea
                value={note}
                type="text"
                rows="4"
                class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
            ></textarea> */}
        </div>
    );
}

export default Information;
