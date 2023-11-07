import { IHeroPower } from "@/components/atoms/HeroPower/HeroPower.interface";
import { IApparence } from "@/components/molecules/HeroCard/generic-interfaces/apparence.interface";
import { IBiography } from "@/components/molecules/HeroCard/generic-interfaces/biography.interface";
import { IConnections } from "@/components/molecules/HeroCard/generic-interfaces/connections.interface";
import { IImages } from "@/components/molecules/HeroCard/generic-interfaces/images.interface";
import { IPowerStats } from "@/components/molecules/HeroCard/generic-interfaces/powerStats.interface";
import { IWork } from "@/components/molecules/HeroCard/generic-interfaces/work.interface";
import { createSlice } from "@reduxjs/toolkit";

export interface IHeroResult {
    appearance: IApparence,
    biography: IBiography,
    connections: IConnections,
    id: number,
    images: IImages,
    name: string,
    powerstats: IPowerStats,
    slug: string,
    work: IWork
}

export interface IListHeros {
    appearance: IApparence,
    biography: IBiography,
    connections: IConnections,
    id: number,
    name: string,
    images: IImages,
    slug: string,
    work: IWork
}

export const initialStatesHero: IPowerStats = {
    combat: 0, durability: 0, intelligence: 0, power: 0, speed: 0, strength: 0
}

export const initialDataHeros ={
    name: '',
    image:'',
    race: '',
    heroPowers: initialStatesHero, 
}
export const listHeros = [{
    appearance: <IApparence>{},
    biography: <IBiography>{},
    connections: <IConnections>{},
    id: <number>0,
    name: <string>'',
    images: <IImages>{},
    slug: <string>{},
    work: <IWork>{}
}]


const herosBattleInfoSlice = createSlice({
    name: "herosBattleInfo",
    initialState: {
        infoHeroOne: initialDataHeros,
        infoHeroTwo: initialDataHeros,
        listheros:  listHeros,
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
        },
        setListHeros(state, action){        
           state.listheros = action.payload
        }
    }
})

export const {reducer: herosBattleInfoReducer, actions} = herosBattleInfoSlice
