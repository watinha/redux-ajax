import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const catSlice = createSlice({
    name: 'cat',
    initialState: { favorite: [], current: '', loading: false },
    reducers: {
        like: (state, action) => {
            state.favorite = [action.payload, ...state.favorite];
            return state;
        },
        set_current: (state, action) => {
            state.current = action.payload;
            return state;
        },
        starting: (state) => {
            state.loading = true;
            return state;
        },
        complete: (state) => {
            state.loading = false;
            return state;
        }
    },
});
export const loading_map = (state) => state.cat.loading;
export const favorite_map = (state) => state.cat.favorite;
export const current_map = (state) => state.cat.current;
export const catActions = catSlice.actions;
export const find_cat = () => async (dispatch) => {
    dispatch(catActions.starting());
    const response = await axios.get('https://aws.random.cat/meow');
    dispatch(catActions.set_current(response.data.file));
    dispatch(catActions.complete());
};
export default catSlice.reducer;
