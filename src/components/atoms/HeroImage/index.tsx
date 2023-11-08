/* eslint-disable @next/next/no-img-element */
import { Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IHeroImage } from "./HeroImage.interface";
import { HeroRaceColor } from "@/helpers/Enum";

export default function HeroImage({url, nameHero, colorHero}: IHeroImage){
    const color = 'rgb(67,160,71)'
    return (
            <img className="phone:w-20 md:w-36 phone:h-20 md:h-44  rounded-md " 
                    style={{boxShadow: `-2px 3px 8px 8px ${HeroRaceColor[colorHero]}`}}
                    src={`${url}?w=164&h=164&fit=crop&auto=format`} 
                    alt={nameHero}
            />
    )
}