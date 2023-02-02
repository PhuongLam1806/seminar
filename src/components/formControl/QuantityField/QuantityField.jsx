import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import styles from './QuantityField.module.scss';
import classNames from 'classnames/bind';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const cx = classNames.bind(styles);

function QuantityField(props) {
    const { form, name, label, disabled } = props;
    // const {error, formState} = form
    const {
        formState: { errors, setValue },
    } = form;
    const hasError = !!errors[name];
    //   });

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, name, value } }) => (
                    <FormControl error={hasError} margin="normal" fullWidth variant="outlined" size="small">
                        {/* <InputLabel htmlFor={name}>{label}</InputLabel> */}
                        <Typography>{label}</Typography>
                        <Box className={'box'}>
                            {/* <IconButton
                                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}
                            >
                                <RemoveCircleOutline />
                            </IconButton> */}
                            <OutlinedInput
                                disableEscapeKeyDown
                                onChange={onChange}
                                onBlur={onBlur}
                                id={name}
                                type="number"
                                name={name}
                                disabled={disabled}
                                value={value}
                                // error={!!hasError}
                                // helperText={errors[name]?.message}
                            />

                            {/* <IconButton
                                onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}
                            >
                                <AddCircleOutline />
                            </IconButton> */}
                        </Box>
                        <FormHelperText>{errors[name]?.message}</FormHelperText>
                    </FormControl>
                )}
            />
        </div>
    );
}

export default QuantityField;
