import userApi from '../../api/userApi';
import StorageKeys from '../../constants/storageKeys';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const register = createAsyncThunk('user/register', async (payload) => {
    //call api to register
    const data = await userApi.register(payload);
    //save data to local storage

    const jsonUsers = JSON.stringify(data.user);
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, jsonUsers);
    //return userdata
    return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    //call api to login
    const data = await userApi.login(payload);
    //save data to local storage

    const jsonUsers = JSON.stringify(data.user);
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, jsonUsers);
    //return userdata
    return data.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);

            state.current = {};
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        // [getMe.fulfilled]: (state, action) => {
        //     state.current = action.payload || {};
        // },
        // [getMe.rejected]: (state, action) => {
        //     state.current = {};
        // },
    },
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
