import {createSlice} from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        value: {
            email: '',
            search: ''
        }
    },
    reducers: {
        showMyQuestions: (state,action) => {
            state.value = action.payload;
            console.log('filter');
            console.log(action.payload);
        },
        showSearch: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const {showMyQuestions, showSearch} = filterSlice.actions;
export default filterSlice.reducer;