
import { Box } from "@mui/material";
import { IInfoHeroChampion } from "./InfoHeroChampion.interface";



export default function InforHeroChampion({playerWin, heroOneName, heroTwoName}: IInfoHeroChampion){
    return (
        <Box className='flex justify-center flex-col items-center'>                
            {playerWin === 1 && <h2 className='md:text-2xl text-xl' >{heroOneName}</h2> }
            {playerWin === 2 && <h2 className='md:text-2xl text-xl' >{heroTwoName}</h2> }
            {playerWin === 3 && <h2 className='md:text-2xl text-xl text-red-600' >Morte Subta</h2> }
            {playerWin !== 3 ? (
                <span className=' font-extrabold md:text-xl text-green-700' >é o CAMPEÃO!</span>                
            ):
                (
                
                    <span className=' font-extrabold md:text-xl ' >Campões iguais, não tivemos sobrevivente!!</span>           
                
                )
            }
        </Box>

    )
}
