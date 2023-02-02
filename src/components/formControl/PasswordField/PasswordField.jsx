import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    // const {error, formState} = form
    const {
        formState: { errors },
    } = form;
    const hasError = !!errors[name];
    //   });

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword((x) => !x);
    };

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <FormControl error={hasError} margin="normal" fullWidth variant="outlined">
                        <InputLabel htmlFor={name}>{label}</InputLabel>
                        <OutlinedInput
                            disableEscapeKeyDown
                            onChange={onChange}
                            onBlur={onBlur}
                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            label={label}
                            name={name}
                            disabled={disabled}
                            // error={!!hasError}
                            // helperText={errors[name]?.message}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText>{errors[name]?.message}</FormHelperText>
                    </FormControl>
                )}
            />
        </div>
    );
}

export default PasswordField;
