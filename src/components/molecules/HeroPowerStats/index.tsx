
import { Box, Typography } from "@mui/material";
import ImageVS from '../../../assets/images/imageVS.png';
import { IHeroPowerStats } from "./IHeroPowerStats.interface";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HeroCard from "../HeroCard";


export default function HeroPowerStats({heroName, heroImage, heroRace, championLeft, principalHero, openenteHero}: IHeroPowerStats){
    return (
        <Box className='flex flex-row space-x-2'>
            {championLeft && (
                <HeroCard heroRace={heroRace} heroImageUrl={heroImage} heroName={heroName} />                 
            )}        
            <Box className='flex flex-col  justify-center' >
                {Object.keys(principalHero).map(function (key, value) {
                    return (
                        <>                        
                         <Box className='justify-center items-center flex' key={key}>
                            {!championLeft && (
                                 principalHero[key] > openenteHero[key] ?
                                    <ArrowDropUpIcon color='success'/> : 
                                    <ArrowDropDownIcon color='error' /> 
                             )}
                             
                             {principalHero[key]} 
                             
                             {championLeft && (
                                 principalHero[key] > openenteHero[key] ?
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


// export default NavGroup;