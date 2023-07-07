import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PaymentMethod.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const courses = [
    {
        id: 1,
        name: 'Thanh toán tiền mặt',
    },
    {
        id: 2,
        name: 'Thanh toán chuyển khoản',
    },
];

var subject = ['PHP', 'HTML', 'CSS', 'JS'];
function PaymentMethod({ onGet }) {
    const [checked, setChecked] = useState(1);
    // console.log(checked);

    const handleSubmit = () => {
        console.log({ id: checked });
    };
    if (setChecked) {
        onGet(checked);
    }
    return (
        <div>
            {courses.map((course) => (
                <div className={cx('container')}>
                    <input
                        key={course.id}
                        type="radio"
                        checked={checked === course.id}
                        onChange={(e) => setChecked(course.id)}
                    />
                    {course.name}
                </div>
            ))}

            {/* <button onClick={handleSubmit}>Register</button> */}
            <br />

            {/* {subject.join('')} */}
        </div>
    );
}

export default PaymentMethod;
