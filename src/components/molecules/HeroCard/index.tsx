
import { Box, Typography } from "@mui/material";
import HeroImage from "@/components/atoms/HeroImage";
import HeroPower from "@/components/atoms/HeroPower";
import TextInfo from "@/components/atoms/TextInfo";
import { HeroBgColor, HeroRaceColor } from "@/helpers/Enum";
import { IHeroCard } from "./HeroCard.interface";


export default function HeroCard({heroName, heroRace, heroImageUrl, heroPower}: IHeroCard){
    return (
        
    <Box className='cursor-pointer rounded-lg border-2 opacity-3 w-48 h-80 lg:h-80 flex flex-col justify-start items-center'
        style={{backgroundColor:`${HeroBgColor[heroRace]}`, borderColor: `${HeroRaceColor[heroRace]}` }}
    >
            
        <HeroImage 
            // url="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg" 
             url={heroImageUrl} 
            nameHero={heroName || 'Sem raça'}
            colorHero={heroRace}
        />
        <Typography variant="h5" className="mt-2 text-center text-lg">{heroName}</Typography>
        <TextInfo info={heroRace}  />
        <HeroPower power={heroPower} />        
    </Box>
    )
}


// export default NavGroup;