import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cardSlice"; // Ensure this path is correct based on your project structure

const  appStore = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default appStore;