import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserAvatar from "@/components/atoms/UserAvatar";
import TextInfo from "@/components/atoms/TextInfo";
import NavItem from "@/components/atoms/NavItem";
import SearchInput from "@/components/atoms/SearchInput";


export default function Header(){
    return (
            <Box className='bg-gray-500 flex pt-2 justify-around items-center'>
                <div className="items-center justify-center flex flex-col">
                    <UserAvatar />
                    <TextInfo info="Claudio Inácio" />
                </div>
                <div >
                    <ul className="space-x-2 flex">
                    <NavItem name="Batalha" route="" />
                    <NavItem name="Tutorial" route="tutorial" />
                    </ul>
                </div>
                <SearchInput label='Procurar Heroi' value="" />
            </Box>
    )
}