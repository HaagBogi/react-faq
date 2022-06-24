import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            firstname: '',
            lastname: '',
            email: ''
        }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = {
                firstname: '',
                lastname: '',
                email: ''
            }
        },
    }
});
export const {login, logout} = userSlice.actions;
export default userSlice.reducer;