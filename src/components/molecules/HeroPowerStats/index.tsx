
import { Box, Typography } from "@mui/material";
import { IHeroPowerStats } from "./IHeroPowerStats.interface";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HeroCard from "../HeroCard";


export default function HeroPowerStats({heroName, heroImage, heroRace, championLeft, principalHero, oponenteHero}: IHeroPowerStats){
    return (
        <Box className='flex flex-row  m-0' >
            {championLeft && (
                <HeroCard heroRace={heroRace} heroImageUrl={heroImage} heroName={heroName} />                 
            )}        
            <Box className='flex flex-col  justify-center ' >
                {Object.keys(principalHero).map(function (key, value) {
                    return (
                        <>                        
                         <Box className='justify-center items-center flex px-4 ' key={principalHero.durability}>
                            {!championLeft && (
                                 principalHero[key] > oponenteHero[key] ?
                                    <ArrowDropUpIcon color='success'/> : 
                                    <ArrowDropDownIcon color='error' /> 
                             )}
                             
                             <span className="">
                             {principalHero[key]} 
                             </span>
                             
                             {championLeft && (
                                 principalHero[key] > oponenteHero[key] ?
                                    <ArrowDropUpIcon color='success'/> : 
                                    <ArrowDropDownIcon color='error' /> 
                             )}
                         </Box>
                    </>
                    )
                })}
             </Box>
             {!championLeft && (
                <HeroCard heroRace={heroRace} heroImageUrl={heroImage} heroName={heroName} />                 
            )}    
        </Box>

    )
}
