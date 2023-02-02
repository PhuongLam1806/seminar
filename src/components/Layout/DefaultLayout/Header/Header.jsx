import React, { useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import svg from '../../../assets/index';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogContent, DialogActions, Box, IconButton, Menu, MenuItem, Badge } from '@mui/material';
import LoginForm from '../../../LoginForm/LoginForm';
import RegisterForm from '../../../RegisterForm/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import { logout } from '../../../Auth/userSlice';
import { cartItemsCountSelector } from '../../../Cart/selector';

const cx = classNames.bind(styles);

const pa = [
    { page: 'HOME', path: '/' },
    { page: 'CONTACT', path: '/contact' },
    { page: 'ABOUT', path: '/about' },
];
const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};
function Header() {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(cartItemsCountSelector);
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleLoggoutClick = () => {
        const action = logout();
        dispatch(action);
    };

    const handleCartClick = () => {
        navigate('/cart');
    };
    const pages = ['HOME', 'CONTACT', 'ABOUT'];
    const [state, setState] = useState('HOME');
    const handleNav = (page) => {
        setState(`${page}`);
    };

    console.log('trang thái', state);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('flex items-center')}>
                    <img src={svg.logo} className={cx('mr-2')} />
                    <div className={cx('name')}>
                        <Link to="/">PLAM</Link>
                    </div>
                </div>

                <ul className={cx('gap-6 text-[#7b88a8] mbi:hidden md:flex')}>
                    {/* <Link onClick={handleNav} to="/">
                        HOME
                    </Link> 
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link> */}
                    {pa.map((page, index) => {
                        return (
                            <Link
                                key={index}
                                to={
                                    // (page === 'HOME' && '/') ||
                                    // (page === 'CONTACT' && '/contact') ||
                                    // (page === 'ABOUT' && '/about')
                                    page.path
                                }
                                onClick={() => handleNav(page.page)}
                            >
                                {page.page}
                            </Link>
                        );
                    })}
                </ul>
                {!isLoggedIn && (
                    <div>
                        <Button onClick={handleClickOpen} sx={{ fontSize: 16 }}>
                            Login
                        </Button>
                    </div>
                )}

                {isLoggedIn && (
                    <IconButton onClick={handleUserClick}>
                        <AccountCircle />
                    </IconButton>
                )}
            </div>
            <div className={cx('flex flex-col items-center mt-20 mb-20')}>
                <h1 className={cx('font-semibold mt-0 mb-0')}>OURSHOP</h1>
                <h3>{state}/Page</h3>
            </div>
            <IconButton size="large" aria-label="show 17 new notifications" color="inherit" onClick={handleCartClick}>
                <Badge badgeContent={cartItemsCount} color="error">
                    <ShoppingCart />
                </Badge>
            </IconButton>

            <Menu
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLoggoutClick}>Logout</MenuItem>
            </Menu>
            <Dialog onBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogContent>
                    {/* <LoginForm /> */}
                    {/* <RegisterForm /> */}
                    {mode === MODE.REGISTER && (
                        <>
                            <RegisterForm closeDialog={handleClose} />
                            <Box padding="10px" textAlign="center">
                                <Button onClick={() => setMode(MODE.LOGIN)} color="primary">
                                    Already have a account? Login here
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <LoginForm closeDialog={handleClose} />
                            <Box padding="10px" textAlign="center">
                                <Button onClick={() => setMode(MODE.REGISTER)} color="primary">
                                    Don't have a account? Register here
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Header;
