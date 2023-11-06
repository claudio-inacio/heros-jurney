import { IHeroPower } from "@/components/atoms/HeroPower/HeroPower.interface";
import { IPowerStats } from "@/components/molecules/HeroCard/generic-interfaces/powerStats.interface";
import { createSlice } from "@reduxjs/toolkit";




const herosBattleInfoSlice = createSlice({
    name: "herosBattleInfo",
    initialState: {
        infoHeroOne: {
            name: '',
            heroPowers: <IPowerStats>{combat: 0, durability: 0, intelligence: 0, power: 0, speed: 0, strength: 0}, 
        },
        infoHeroTwo: {
            name: '',
            heroPowers: <IPowerStats>{combat: 10, durability: 10, intelligence: 10, power: 10, speed: 10, strength: 10},
        },
    },
    reducers: {
        setHeroOne(state, action){
            state.infoHeroOne = action.payload;
        },
        setHeroTwo(state, action){
            state.infoHeroTwo = action.payload;
        }
    }
})

export const {reducer: herosBattleInfoReducer, actions} = herosBattleInfoSlice