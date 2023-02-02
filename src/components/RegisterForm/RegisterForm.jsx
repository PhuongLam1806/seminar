import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import styles from './RegisterForm.module.scss';
import classNames from 'classnames/bind';
import InputField from '../formControl/InputField/InputField';
import PasswordField from '../formControl/PasswordField/PasswordField';
import { useDispatch } from 'react-redux';
import { register } from '../Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    closeDialog: PropTypes.func,
};

const cx = classNames.bind(styles);
function RegisterForm(props) {
    // const classes = useStyles()

    const schema = yup
        .object({
            fullName: yup
                .string()
                .required('please enter your fullname')
                .test('Should has at least two words', 'Please enter at least two words', (value) => {
                    // console.log('Value:', value);
                    return value.split(' ').length >= 2;
                }),

            email: yup.string().required('please enter your email').email('Please enter valid email'),
            password: yup
                .string()
                .required('please enter your password')
                .min(6, 'Password must be at least 6 characters'),
            retypePassword: yup
                .string()
                .required('please retype your retypePassword')
                .oneOf([yup.ref('password')], 'Password does not match'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        console.log('Todo Form: ', values);
        // const { onSubmit } = props;
        // if (onSubmit) onSubmit(values);

        // form.reset();

        try {
            //auto set username = email

            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            // enqueuSnackbar('Register successfully', { variant: 'success' });
            enqueueSnackbar('Register success!!!!', { variant: 'success' });

            console.log('user', user);

            //close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            console.log('fail to register', error);
        }
    };

    return (
        <div className={cx('w-[450px]')}>
            <Avatar color="secondary" className={cx('form-avt')}></Avatar>

            <Typography component="h3" variant="h5" className={cx('flex justify-center')}>
                Create Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype password" form={form} />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="form__btn"
                    style={{ marginTop: 20, width: '100%', padding: 10 }}
                >
                    Create account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
