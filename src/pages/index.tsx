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
import BattleModal from "@/components/organisms/modal";


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

export default function Home(){
        // const [heros, setHeros] = useState<IHeroResult[]>([]);
        const [loading, setLoading] = useState<boolean>(true)
        const dispatch = useDispatch<HeroInfoDispatch>();
        const [heroSelect, setHeroSelect] = useState(1);
        const [openModal, setOpenModal] = useState<boolean>(false);
        const heroOne = useHeroSelector(state => state.herosInfo.infoHeroOne)
        const heroTwo = useHeroSelector(state => state.herosInfo.infoHeroTwo)
        let heros = useHeroSelector(state => state.herosInfo.listheros);
        const resetStatusHeros = {combat: 0, durability:0, intelligence: 0, power: 0, speed: 0, strength: 0}        
        
        async function handleGetHeros() {
            setLoading(true)
            const response = await api.get('') 
            if(response.status === 200){
                // setHeros(response.data)
                dispatch(actions.setListHeros(response.data))
            }else{
                // setHeros([]);
            }
            
            setLoading(false)
            return response;
        }
        
        const hendleSaveHero = (hero: IHeroResult) => {
            if(heroSelect === 1){
                dispatch(actions.setHeroOne({name: hero.name, image: hero.images.md, race: hero.appearance.race, heroPowers: hero.powerstats }))
                setHeroSelect(2);
            }else{
                dispatch(actions.setHeroTwo({name: hero.name, image: hero.images.md,race: hero.appearance.race, heroPowers: hero.powerstats }))                
            }
        }
        const hendleResetHeros = () => {            
                dispatch(actions.setResetHeroStatus())
                setHeroSelect(1); 
        }
        function handleCloseModal(){
            return setOpenModal(false)
        };
        const handleInitBattle = () => {
            setOpenModal(true)
        }
        
        useEffect( ()  => {            
            handleGetHeros()                        
        },[])        
    
    return (
        <div className="w-full h-full bg-gray-500  flex ">
        {loading && (
            <Box className=' w-full flex flex-col justify-center items-center' >
                <CircularProgress />
                <Typography>Carregando Herois...</Typography>
            </Box> )}
        {!loading && heros.length > 0  &&(
        <Box className="flex flex-col">
            <Box className="bg-gray-700 flex flex-col p-16 items-center text-white">            
                <Box className='flex items-center justify-center'>                    
                    <Typography onClick={() => setHeroSelect(1)} className={`border-b-4 ${heroSelect === 1 && 'border-primary-orange'} cursor-pointer py-2 px-8 bg-gray-950 rounded-md`} variant="subtitle1">
                        {heroOne.name || '----------'} 
                    </Typography>                 
                    <Image width={300} height={300} src={ImageVS} alt="imagem versus" /> 
                    <Typography onClick={() => setHeroSelect(2)} className={`border-b-4 ${heroSelect === 2 && 'border-primary-orange'} cursor-pointer py-2 px-8 bg-gray-950 rounded-md`} variant="subtitle1">
                        {heroTwo.name || '----------'}
                    </Typography>
                </Box>                    
                <Button disabled={heroTwo.name === ''} onClick={() => handleInitBattle()} color='warning' size="large"  variant="contained" className="w-1/2">Batalhar</Button>
                <Button disabled={heroOne.name === ''} onClick={() => hendleResetHeros()} color='info' size="large"  variant="contained" className="w-1/4 mt-3">Limpar Escolhas</Button>
                    <h1>Selecione os personagens da batalha</h1>
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
             <BattleModal hendleResetHeros={hendleResetHeros} open={openModal} handleClose={handleCloseModal} />
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