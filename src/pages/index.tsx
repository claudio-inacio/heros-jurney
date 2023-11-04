import HeroCard from "@/components/molecules/HeroCard";
import api from "@/services/ApiService";
import { Alert, AlertTitle, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home(){
        const [heros, setHeros] = useState<object[]>([]);
        const [loading, setLoading] = useState<boolean>(true)
        
        async function handleGetHeros() {
            setLoading(true)
            const response = await api.get('') 
            if(response.status === 200){
                setHeros(response.data)
            }else{
                setHeros([]);
            }
            
            setLoading(false)
            return response;
        }
    
    
        useEffect( ()  => {
            handleGetHeros()                        
        },[])
    
    return (
        <div className="bg-blue-700 pt-14 ">
        {loading && <CircularProgress />}
        {!loading && heros.length > 0  &&(
         
            <span>teste</span>
        )}
        {!loading  &&  heros.length === 0 && (
        <>
            <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                Nenhum Herói foi encontrado - <strong>Tente mais tarde!</strong>
            </Alert>
        </>
        )}
        </div>    
        )
}