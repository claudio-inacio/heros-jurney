
import { Box, Button, Typography } from "@mui/material";
import HeroImage from "@/components/atoms/HeroImage";
import HeroPower from "@/components/atoms/HeroPower";
import TextInfo from "@/components/atoms/TextInfo";
import { HeroBgColor, HeroRaceColor } from "@/helpers/Enum";
import { IHeroCard } from "./HeroCard.interface";


export default function HeroCard({heroName, heroRace, heroImageUrl, heroPower}: IHeroCard){
    return (

    <Box  className='hover:opacity-70 cursor-pointer rounded-lg border-2 opacity-3  md:w-48 md:h-80 phone:w-32 phone:h-52 flex flex-col justify-start items-center'
        style={{backgroundColor:`${HeroBgColor[heroRace]}`, borderColor: `${HeroRaceColor[heroRace]}` }}
    >
        <HeroImage             
             url={heroImageUrl} 
            nameHero={heroName || 'Sem raça'}
            colorHero={heroRace}
        />
        <Typography variant="h6" className="mt-2 text-center text-lg">{heroName}</Typography>
        <TextInfo info={heroRace}  />
        <HeroPower power={heroPower} />        
    </Box>

    )
}


// export default NavGroup;