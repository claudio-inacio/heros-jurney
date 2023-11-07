'use client'

import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoaderHeros(){

    return (
        <Box className=' w-full flex h-screen flex-col justify-center items-center' >
        <CircularProgress />
        <Typography>Carregando Herois...</Typography>
    </Box>  
    )
}