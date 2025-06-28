import { createSlice } from "@reduxjs/toolkit";

interface CardState {
    items: any[]; // Replace 'any' with your actual item type if known, e.g., 'ItemType[]'
}

const initialState: CardState = {
    items: []
};

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem,removeItem,clearCart} = cardSlice.actions;
export default cardSlice.reducer;

