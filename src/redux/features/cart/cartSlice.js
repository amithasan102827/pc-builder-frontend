import { createSlice } from '@reduxjs/toolkit';

let total = 0;
const initialState = {
    products: [],
    total
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
            state.total += action.payload.price;
        },
        removeOne: (state, action) => {
            const existingIndex = state.products.findIndex(
                (product) => product._id === action.payload._id
            );

            if (existingIndex !== -1) {
                state.products.splice(existingIndex, 1);
                state.total -= action.payload.price;
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product._id !== action.payload._id
            );

            state.total -= action.payload.price;
        },
    },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;