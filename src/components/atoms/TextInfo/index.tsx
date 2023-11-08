import { Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { ITextInfo } from "./TextInfo.interface";

export default function TextInfo(props: ITextInfo){
    return (
            <Typography className="font-bold text-white text-center">
                 {props.info}
            </Typography>
    )
}