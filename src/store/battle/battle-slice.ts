import { IHeroPower } from "@/components/atoms/HeroPower/HeroPower.interface";
import { IPowerStats } from "@/components/molecules/HeroCard/generic-interfaces/powerStats.interface";
import { createSlice } from "@reduxjs/toolkit";


export const initialStatesHero: IPowerStats = {
    combat: 0, durability: 0, intelligence: 0, power: 0, speed: 0, strength: 0
}

export const initialDataHeros ={
    name: '',
    image:'',
    race: '',
    heroPowers: initialStatesHero, 
}




const herosBattleInfoSlice = createSlice({
    name: "herosBattleInfo",
    initialState: {
        infoHeroOne: initialDataHeros,
        infoHeroTwo: initialDataHeros,
    },
    reducers: {
        setHeroOne(state, action){
            state.infoHeroOne = action.payload;
        },
        setHeroTwo(state, action){
            state.infoHeroTwo = action.payload;
        },
        setResetHeroStatus(state){        
            state.infoHeroOne = initialDataHeros,
            state.infoHeroTwo = initialDataHeros
        }
    }
})

export const {reducer: herosBattleInfoReducer, actions} = herosBattleInfoSlice
