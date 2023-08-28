// import { createSlice } from '@reduxjs/toolkit';

// let total = 0;
// const products = [];
// const initialState = {
//     products,
//     total
// };

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {
//             state.products.push({...action.payload});
//             state.total += action.payload.price;
//         },

//         removeOne: (state, action) => {
//             const existingIndex = state.products.findIndex(
//                 (product) => product._id === action.payload._id
//             );

//             if (existingIndex !== -1) {
//                 state.products.splice(existingIndex, 1);
//                 state.total -= action.payload.price;
//             }
//         },
//         removeFromCart: (state, action) => {
//             state.products = state.products.filter(
//                 (product) => product._id !== action.payload._id
//             );

//             state.total -= action.payload.price;
//         },


//     },
// });

// export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newProduct = { ...action.payload };
            state.products.push(newProduct);
            state.total += newProduct.price;
        },

        removeOne: (state, action) => {
            const existingIndex = state.products.findIndex(
                (product) => product._id === action.payload._id
            );

            if (existingIndex !== -1) {
                const removedProduct = state.products[existingIndex];
                state.products.splice(existingIndex, 1);
                state.total -= removedProduct.price;
            }
        },
        removeFromCart: (state, action) => {
            const removedProduct = state.products.find(
                (product) => product._id === action.payload._id
            );

            if (removedProduct) {
                state.products = state.products.filter(
                    (product) => product._id !== action.payload._id
                );
                state.total -= removedProduct.price;
            }
        },
    },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;

export default cartSlice.reducer;