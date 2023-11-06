import { Box } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IHeroPower } from "./HeroPower.interface";
import BoltSharpIcon from '@mui/icons-material/BoltSharp';

export default function HeroPower({power}: IHeroPower){
    return (
            <Box className="w-full flex flex-row justify-center space-x-2  items-center">
                <BoltSharpIcon className="text-white" fontSize="large" />
                <span className="text-white font-bold text-lg">{power}</span>
            </Box>
    )
}