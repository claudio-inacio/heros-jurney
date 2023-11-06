import HeroCard from "@/components/molecules/HeroCard";
import { IApparence } from "@/components/molecules/HeroCard/generic-interfaces/apparence.interface";
import { IBiography } from "@/components/molecules/HeroCard/generic-interfaces/biography.interface";
import { IConnections } from "@/components/molecules/HeroCard/generic-interfaces/connections.interface";
import { IImages } from "@/components/molecules/HeroCard/generic-interfaces/images.interface";
import { IPowerStats } from "@/components/molecules/HeroCard/generic-interfaces/powerStats.interface";
import { IWork } from "@/components/molecules/HeroCard/generic-interfaces/work.interface";
import api from "@/services/ApiService";
import { HeroInfoDispatch, store, useHeroSelector } from "@/store";
import { actions } from "@/store/battle/battle-slice";
import { Alert, AlertTitle, Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ImageVS from '../assets/images/imageVS.png';
import Image from "next/image";


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
        const dispatch = useDispatch<HeroInfoDispatch>();
        const [heroSelect, setHeroSelect] = useState(1);
        const vsImage = '../assets/images/imageVS.png'
        const heroOne = useHeroSelector(state => state.herosInfo.infoHeroOne)
        const heroTwo = useHeroSelector(state => state.herosInfo.infoHeroTwo)
        // dispatch(actions.setHeroOne({name: 'maria do bairro'}))
        
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
        
        const hendleSaveHero = (hero: IHeroResult) => {
            if(heroSelect === 1){
                dispatch(actions.setHeroOne({name: hero.name, heroPowers: hero.powerstats }))
                setHeroSelect(2);
            }else{
                dispatch(actions.setHeroTwo({name: hero.name, heroPowers: hero.powerstats }))                
            }
        }
        
        useEffect( ()  => {            
            
            handleGetHeros()                        
        },[])
        console.log('heroOne: ', heroOne)
    
    return (
        <div className="w-full h-full bg-gray-500  flex ">
        {loading && <CircularProgress />}
        {!loading && heros.length > 0  &&(
        <Box className="flex flex-col">
            <Box className="bg-gray-700 flex flex-col p-16 items-center text-white">
                <Box className='flex items-center justify-center'>
                    <Typography variant="subtitle1">{heroOne.name} </Typography> 
                    <Image width={300} height={300} src={ImageVS} alt="imagem versus" /> 
                    <Typography variant="subtitle1">{heroTwo.name}</Typography>
                </Box>
                <Button disabled={heroTwo.name === ''} color='warning' size="large"  variant="contained" className="w-1/2">Batalhar</Button>
            </Box>
             <Grid container spacing={1}  style={{minWidth: '320px'}} className="flex flex-wrapflex-col ">
                {heros.map((hero) => {
                    return (
                   
                       <Grid key={hero.id} onClick={() => hendleSaveHero(hero)} item className="  flex justify-center " xs={12} md={4} sm={4} lg={3}>
                            <HeroCard heroRace={hero.appearance?.race} heroPower={hero.powerstats.strength} heroImageUrl={hero.images.md} heroName={hero.name} /> 
                        </Grid>
     
                    )       
                })} 
             </Grid>        
        </Box>
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