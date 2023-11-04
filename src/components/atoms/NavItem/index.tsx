import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { INavItem } from "./NavItem.interface";
import TextInfo from "../TextInfo";
import Link from "next/link";

export default function NavItem(props: INavItem){
    return (
            <li className="w-28  focus:bg-blue-400 py-2 cursor-pointer rounded-md bg-primary-orange  list-none items-center justify-center flex  " >
            <Link href={`/${props.route}`} className="w-full justify-center flex">                
                <TextInfo info={props.name}/>                               
            </Link>
            </li>
    )
}