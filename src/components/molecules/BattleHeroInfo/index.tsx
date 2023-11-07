
import { Box, Typography } from "@mui/material";
import ImageVS from '../../../assets/images/imageVS.png';
import { IBattleHeroInfo } from "./BattleHeroInfo.interface";
import Image from "next/image";
import HeroInfo from "@/components/atoms/HeroInfo";


export default function BattleHeroInfo({heroOneName, heroTwoName, setHeroSelect, heroSelect}: IBattleHeroInfo){
    return (
        <Box className='flex items-center md:flex-row flex-col justify-center'>                    
            <HeroInfo heroName={heroOneName} selected={heroSelect === 1} setHeroSelect={setHeroSelect} newValueHeroSelect={1}  />
                <Image width={300} height={300} src={ImageVS} alt="imagem versus" /> 
            <HeroInfo heroName={heroTwoName} selected={heroSelect === 2} setHeroSelect={setHeroSelect} newValueHeroSelect={2}  />
        </Box>  

    )
}


// export default NavGroup;