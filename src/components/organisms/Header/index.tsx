'use client'

import { Box } from "@mui/material";
import SearchInput from "@/components/atoms/SearchInput";
import { ReactNode } from "react";
import UserInformations from "../../molecules/UserInformations";
import NavGroup from "../../molecules/NavGroup";

export default function Header(){
    const myRouts = [
        {name: 'Batalha', route: ""},
        {name: 'Tutorial', route: "tutorial"},        
    ]

    return (
        <Box style={{minWidth: '320px'}}  className='bg-gray-500 flex pt-2 justify-around items-center md:flex-row phone:flex-col phone:space-y-2 phone:pb-2 '>
            <UserInformations userName="Claudio Inácio"/>                
            <NavGroup items={myRouts} />
            <SearchInput label='Procurar Heroi' value="" />
        </Box>    
    )
}