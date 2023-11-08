
import { Typography } from "@mui/material";
import { IHeroInfo } from "./HeroInfo.interface";

export default function HeroInfo({heroName, setHeroSelect, selected, newValueHeroSelect}: IHeroInfo){
    return (
        <Typography onClick={() => setHeroSelect(newValueHeroSelect)} className={`border-b-4 ${selected && 'border-primary-orange'} cursor-pointer py-2 px-8 bg-gray-950 rounded-md`} variant="subtitle1">
            {heroName || '----------'} 
        </Typography>   

    )
}
