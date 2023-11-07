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
import BattleApresentation from "@/components/organisms/battle-apresentation";
import LoaderHeros from "@/components/organisms/LoaderHeros";
import ListHeros from "@/components/organisms/ListHeros";


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
        const [loading, setLoading] = useState<boolean>(true)
        const dispatch = useDispatch<HeroInfoDispatch>();
        const [heroSelect, setHeroSelect] = useState(1);
        const [openModal, setOpenModal] = useState<boolean>(false);
        const heroOne = useHeroSelector(state => state.herosInfo.infoHeroOne)
        const heroTwo = useHeroSelector(state => state.herosInfo.infoHeroTwo)
        let heros = useHeroSelector(state => state.herosInfo.listheros);        
        
        async function handleGetHeros() {
            setLoading(true)
            const response = await api.get('') 
            if(response.status === 200){
                dispatch(actions.setListHeros(response.data))
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
        <div className="w-full h-full bg-gray-500  flex flex-col" style={{minHeight: '100vh'}}>
            {loading && (
                <LoaderHeros/>
            )}
            
            <BattleApresentation handleInitBattle={handleInitBattle} hendleResetHeros={hendleResetHeros} heroOneName={heroOne.name} heroSelect={heroSelect} heroTwoName={heroTwo.name}  setHeroSelect={setHeroSelect}/>
            
            {!loading && heros.length > 0  &&(
                <ListHeros handleCloseModal={handleCloseModal} hendleResetHeros={hendleResetHeros} hendleSaveHero={hendleSaveHero} heros={heros} openModal={openModal} />
            )}
        {!loading  &&  heros.length === 0 && (
        <Box style={{height: '500px'}}className=' w-full flex  flex-col justify-start items-center' >
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Nenhum Herói foi encontrado com esse nome
            </Alert>
        </Box>
        )}
        </div>    
        )
}