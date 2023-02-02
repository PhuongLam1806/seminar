import InputField from '../../../components/formControl/InputField/InputField';
// import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import classNames from 'classnames/bind';
// import InputField from '../formControl/InputField/InputField';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import QuantityField from '../../../components/formControl/QuantityField/QuantityField';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
    const schema = yup
        .object({
            quantity: yup.number().required('Enter quantity').min(1, 'at least 1').typeError('Please enter a quantity'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    // console.log('Todo Form: ', values);
    // const { onSubmit } = props;
    // if (onSubmit) onSubmit(values);

    // form.reset();
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="quantity" label="quantity" form={form} />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                className="form__btn"
                style={{ width: '100%', padding: 10 }}
            >
                Add to cart
            </Button>
        </form>
    );
}

export default AddToCartForm;
