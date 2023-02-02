// import React from 'react';
// import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';

// // import { yupResolver } from '@hookform/resolvers/yup';
// // import * as yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { Avatar, Button, TextField, Typography } from '@mui/material';
// // import './styles.scss';
// import InputField from '../formControl/InputField/InputField';
// import PasswordField from '../formControl/PasswordField/PasswordField';
// import styles from './LoginForm.module.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

// LoginForm.propTypes = {
//     onSubmit: PropTypes.func,
// };

// function LoginForm(props) {
//     // const classes = useStyles()

//     const schema = yup
//         .object({
//             identifier: yup.string().required('please enter your email').email('Please enter valid email'),
//             password: yup.string().required('please enter your password'),
//         })
//         .required();

//     const form = useForm({
//         defaultValues: {
//             identifier: '',
//             password: '',
//         },
//         resolver: yupResolver(schema),
//     });

//     const handleSubmit = (values) => {
//         console.log('Todo Form: ', values);
//         const { onSubmit } = props;
//         if (onSubmit) onSubmit(values);

//         form.reset();
//     };

//     return (
//         <div className={cx('w-[450px]')}>
//             <Avatar color="secondary" className={cx('form-avt')}></Avatar>

//             <Typography component="h3" variant="h5" className={cx('flex justify-center')}>
//                 Login
//             </Typography>

//             <form onSubmit={form.handleSubmit(handleSubmit)}>
//                 <InputField name="identifier" label="Username" form={form} />
//                 <PasswordField name="password" label="Password" form={form} />

//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     style={{ marginTop: 20, width: '100%', padding: 10, fontWeight: 600 }}
//                 >
//                     Login
//                 </Button>
//             </form>
//         </div>
//     );
// }

// export default LoginForm;

import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import styles from './LoginForm.module.scss';
import classNames from 'classnames/bind';
import InputField from '../formControl/InputField/InputField';
import PasswordField from '../formControl/PasswordField/PasswordField';
import { useDispatch } from 'react-redux';
import { login } from '../Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    closeDialog: PropTypes.func,
};

const cx = classNames.bind(styles);
function LoginForm(props) {
    // const classes = useStyles()

    const schema = yup
        .object({
            identifier: yup.string().required('please enter your email').email('Please enter valid email'),
            password: yup.string().required('please enter your password'),
        })
        .required();

    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        // console.log('Todo Form: ', values);
        // const { onSubmit } = props;
        // if (onSubmit) onSubmit(values);

        // form.reset();

        try {
            //auto set username = email

            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            enqueueSnackbar('Login success!!!!', { variant: 'success' });

            console.log('user', user);

            //close dialog
            const { closeDialog } = props;
            if (closeDialog) {
                closeDialog();
            }
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            console.log('fail to login', error);
        }
    };

    return (
        <div className={cx('w-[450px]')}>
            <Avatar color="secondary" className={cx('form-avt')}></Avatar>

            <Typography component="h3" variant="h5" className={cx('flex justify-center')}>
                SIGN IN
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="form__btn"
                    style={{ marginTop: 20, width: '100%', padding: 10 }}
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
