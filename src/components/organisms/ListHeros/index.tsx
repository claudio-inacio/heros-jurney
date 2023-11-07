'use client'

import { Box, Button, Grid, Typography } from "@mui/material";
import { IListHeros } from "./ListHeros.interface";
import BattleModal from "../modal";
import HeroCard from "@/components/molecules/HeroCard";

export default function ListHeros({heros, hendleSaveHero, openModal, handleCloseModal, hendleResetHeros } : IListHeros){

    return (
        <Box className="flex flex-col">            
            <Grid container spacing={1}  style={{minWidth: '320px'}} className="flex flex-wrapflex-col ">
               {heros.map((hero) => {
                   return (
                      <Grid key={hero.id} onClick={() => hendleSaveHero(hero)} item className="  flex justify-center " xs={12} md={4} sm={4} lg={3}>
                           <HeroCard heroRace={hero.appearance?.race} heroPower={hero.powerstats.strength} heroImageUrl={hero.images.md} heroName={hero.name} /> 
                       </Grid>
                   )       
               })} 
            </Grid> 
            <BattleModal hendleResetHeros={hendleResetHeros} open={openModal} handleClose={handleCloseModal} />
        </Box> 
    )
}