import { configureStore } from "@reduxjs/toolkit";
import { battleReducer } from "./battle/battle-slice";


export const store = configureStore({
    reducer: {
        battle: battleReducer,
    },
})