import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    // const {error, formState} = form
    const {
        formState: { errors },
    } = form;
    const hasError = errors[name];
    //   });

    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                    sx={{ fontSize: 30 }}
                    onChange={onChange}
                    onBlur={onBlur}
                    // value={value}
                    name={name}
                    label={label}
                    fullWidth
                    // variant='outlined'
                    margin="normal"
                    disabled={disabled}
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
        />
    );
}

export default InputField;
