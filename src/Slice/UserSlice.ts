
import { createSlice } from '@reduxjs/toolkit';
import { usertype } from '../MOdel/user';

interface initialStatetype {
    items: usertype[]
    initialdata: usertype
}
const initialdata = {

    name: '',
    email: '',
    age: 0
}
const initialState: initialStatetype = {
    items: [],
    initialdata: initialdata
};


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add: (state, action) => {
            const newdata = { ...action.payload, id: state.items.length + 1 }
            state.items = [...state.items, newdata]
        },
        update: (state, action) => {
            state.items = state.items.map(item => action.payload.id == item.id ? action.payload : item)
        },
        delete_s:(state, action) => {
            state.items = state.items.filter(item => action.payload!= item.id)
        },
        setselecteddata: (state, action) => {
            state.initialdata = action.payload
        },
        resetselecteddata: (state) => {
            state.initialdata = initialdata;
        }
     


    },
});

export const {  add, update, setselecteddata, resetselecteddata,delete_s } = userSlice.actions;

export default userSlice;