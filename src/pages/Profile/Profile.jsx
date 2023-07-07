import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Information from './components/Info/Information';
import PaymentMethod from './components/PaymentMethod';
import ProductPayment from './components/ProductPayment';
import { useSelector } from 'react-redux';

Profile.propTypes = {};

function Profile() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(1);
    const products = useSelector((state) => state.cart);

    const handleClick = (name, phone, address, note, email) => {
        setName(name);
        setPhone(phone);
        setAddress(address);
        setNote(note);
        setEmail(email);
        // setChecked(checked);
        // console.log({ name });
    };

    const handleClickMethod = (checked) => {
        setChecked(checked);
    };

    const handleName = () => {
        console.log('hihi', name, phone, address, note, email, checked, products);
        // console.log(products);
    };
    return (
        <div className="mt-10">
            <div className="flex mbi:flex-col md:flex-row">
                <div className="basis-1/4 md:basis-1/3 bg-slate-50 p-12 rounded-3xl mr-10 mbi:mb-3 md:mb-0">
                    <h1 className="text-2xl">1. Thông tin đặt hàng</h1>
                    <Information onGet={handleClick} />
                    {/* <button onClick={handleName}> change name</button> */}
                </div>
                <div className="basis-1/4 md:basis-1/3 bg-slate-50 p-12 rounded-3xl mr-10 mbi:mb-3 md:mb-0">
                    <h1 className="text-2xl">2. Phương thức thanh toán</h1>
                    <PaymentMethod onGet={handleClickMethod} />
                </div>
                <div className="basis-1/4 md:basis-1/3 bg-slate-50 p-12 rounded-3xl mr-10">
                    <h1 className="text-2xl">3. Thông tin giỏ hàng</h1>
                    <ProductPayment />
                </div>
            </div>
            <div>
                <button className="float-right p-3 mr-10 border-solid border-2 rounded-lg mt-2" onClick={handleName}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Profile;
