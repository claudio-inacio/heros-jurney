import HeroCard from "@/components/molecules/HeroCard";
import { IApparence } from "@/components/molecules/HeroCard/generic-interfaces/apparence.interface";
import { IBiography } from "@/components/molecules/HeroCard/generic-interfaces/biography.interface";
import { IConnections } from "@/components/molecules/HeroCard/generic-interfaces/connections.interface";
import { IImages } from "@/components/molecules/HeroCard/generic-interfaces/images.interface";
import { IPowerStats } from "@/components/molecules/HeroCard/generic-interfaces/powerStats.interface";
import { IWork } from "@/components/molecules/HeroCard/generic-interfaces/work.interface";
import api from "@/services/ApiService";
import { store } from "@/store";
import { Alert, AlertTitle, Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";

interface IHeroResult {
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

export default function Home(){
        const [heros, setHeros] = useState<IHeroResult[]>([]);
        const [loading, setLoading] = useState<boolean>(true)
        
        async function handleGetHeros() {
            setLoading(true)
            const response = await api.get('') 
            if(response.status === 200){
                setHeros(response.data)
            }else{
                setHeros([]);
            }
            
            setLoading(false)
            return response;
        }
        
        const heroOne = store.getState().battle.infoHeroOne;
        const heroTwo = store.getState().battle.infoHeroTwo;
        
        console.log('heroOne: ', heroOne);
        console.log('heroTwo: ', heroTwo);
    
    
        useEffect( ()  => {
            handleGetHeros()                        
        },[])
    
    return (
        <div className="w-full h-full  flex ">
        {loading && <CircularProgress />}
        {!loading && heros.length > 0  &&(
         <Grid container spacing={1}  style={{minWidth: '320px'}} className="flex flex-wrapflex-col ">
            {heros.map((hero) => {
                return (
               
                   <Grid key={hero.id} onClick={() => console.log('hero: ', hero)} item className="bg-blue-700  flex justify-center " xs={12} md={4} sm={4} lg={3}>
                        <HeroCard heroRace={hero.appearance?.race} heroPower={hero.powerstats.strength} heroImageUrl={hero.images.md} heroName={hero.name} /> 
                    </Grid>
 
                )       
            })} 
         </Grid>        
        )}
        {!loading  &&  heros.length === 0 && (
        <>
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Nenhum Herói foi encontrado - <strong>Tente mais tarde!</strong>
            </Alert>
        </>
        )}
        </div>    
        )
}