'use client'

import { Box, Button, Typography } from "@mui/material";
import ImageVS from '../../../assets/images/imageVS.png';
import Image from "next/image";
import { IBattleApresentation } from "./BattleApresentation.interface";
import BattleHeroInfo from "@/components/molecules/BattleHeroInfo";

export default function BattleApresentation({setHeroSelect, heroSelect, heroOneName, heroTwoName, handleInitBattle, hendleResetHeros} : IBattleApresentation){

    return (
        <Box className="bg-gray-700 flex flex-col p-2 items-center space-y-3 text-white">            
            <BattleHeroInfo heroOneName={heroOneName} heroSelect={heroSelect} heroTwoName={heroTwoName} setHeroSelect={setHeroSelect}/>                  
            <Button disabled={heroTwoName === ''} onClick={() => handleInitBattle()} color='warning' size="large"  variant="contained" className="w-1/2">Batalhar</Button>
            <Button disabled={heroOneName === ''} onClick={() => hendleResetHeros()} color='info' size="large"  variant="contained" className="w-1/4 mt-3">Limpar Escolhas</Button>
                <h2>Selecione os personagens da batalha</h2>
        </Box>   
    )
}