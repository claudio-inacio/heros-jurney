
import { Box } from "@mui/material";
import HeroImage from "@/components/atoms/HeroImage";
import HeroPower from "@/components/atoms/HeroPower";
import TextInfo from "@/components/atoms/TextInfo";
import { HeroBgColor, HeroRaceColor } from "@/helpers/Enum";


export default function HeroCard(){
    return (
        
    <Box className=' rounded-lg border-2 opacity-3 ml-56  w-48 h-64 flex flex-col justify-start items-center'
        style={{backgroundColor:`${HeroBgColor['Human']}`, borderColor: `${HeroRaceColor['Human']}` }}
    >
            
        <HeroImage 
            url="https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg" 
            nameHero="Magneto"
        />
        <TextInfo info='Magneto'  />
        <HeroPower power='600' />        
    </Box>
    )
}


// export default NavGroup;