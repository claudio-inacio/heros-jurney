import { configureStore } from "@reduxjs/toolkit";
import { herosBattleInfoReducer } from "./battle/battle-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
    reducer: {
        herosInfo: herosBattleInfoReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type HeroInfoDispatch = typeof store.dispatch;

export const useHeroSelector: TypedUseSelectorHook<RootState> = useSelector;