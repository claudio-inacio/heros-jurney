
'use client'
import * as React from 'react';
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import HeroCard from '@/components/molecules/HeroCard';
import { useHeroSelector } from '@/store';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',    
    height: '70%',    
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  interface IModalProps {
    open: boolean,    
    handleClose: () => void,
    hendleResetHeros: () => void,
  }
  
  const powersCombat = ['Inteligencia', 'Força', 'Velocidade', 'Durabilidade', 'Poder', 'Combate']
  
export default function BattleModal({open, handleClose, hendleResetHeros}: IModalProps){
    const [isBattle, setIsBattle] = React.useState<boolean>(true)
    const heroOne = useHeroSelector(state => state.herosInfo.infoHeroOne)
    const heroTwo = useHeroSelector(state => state.herosInfo.infoHeroTwo)
    const [playerWin, setPlayerWin] = React.useState<number>(0)
    
    
 
    
    
    const handleCalculateWinner = () => {
        const ArrayPowerOne = Object.values(heroOne.heroPowers);
        const ArrayPowerTwo = Object.values(heroTwo.heroPowers);
        const powerOne = ArrayPowerOne.reduce((acc, currentValue) => acc + currentValue );
        const powerTwo = ArrayPowerTwo.reduce((acc, currentValue) => acc + currentValue );
                
        return powerOne >= powerTwo ? 1 : 2;
    }
    
    React.useEffect(() => {
    if(open){
        setPlayerWin(handleCalculateWinner())
        setTimeout(() => {
            setIsBattle(false)
        }, 3000)
    }
    }, [open])
    
    const handleCloseModal = () => {
        hendleResetHeros();
        handleClose();
        setIsBattle(true);
    }
    
    return (
    <div >
        <Modal
        className=''
          open={open}
          onClose={() => handleCloseModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className='bg-gradient-to-r  from-gray-800 to-orange-300'>
          {isBattle === true ? (
            <>
                <div className='mt-48'>
                    <LinearProgress />
                </div>
                <Typography className='text-white pt-8 flex justify-center items-center' variant="h6" component="h2">
                    Herois batalhando.. Aguarde!!
                </Typography>            
            </>
          ) : 
            <Box className='flex flex-col justify-between space-y-8'>
                <Box className='flex justify-center flex-col items-center'>                
                     {playerWin === 1 ? 
                        <h2 className='text-2xl' >{heroOne.name}</h2> 
                        : 
                        <h2 className='text-2xl' >{heroTwo.name}</h2>
                     } 
                     <span className=' font-extrabold text-2xl text-green-700' >é o CAMPEÃO!</span>
                </Box>
                <Box className='flex flex-row justify-between'>
                <HeroCard heroRace={heroOne.race} heroImageUrl={heroOne.image} heroName={heroOne.name} />                 
                <Box className='flex flex-col  justify-center ml-2' >
                {Object.keys(heroOne.heroPowers).map(function (key, value) {
                    return (
                        <>                        
                         <Box className='justify-center items-center flex' key={key}>
                             {heroOne.heroPowers[key]} 
                             {heroOne.heroPowers[key] > heroTwo.heroPowers[key] ?
                                <ArrowDropUpIcon color='success'/> : 
                                <ArrowDropDownIcon color='error' /> } 
                         </Box>
                    </>
                    )
                })}
                </Box>
                <Box className='flex flex-col  justify-center' >                                        
                    {powersCombat.map((power) => {
                        return <span key={power}>{power}</span>
                    })}
                </Box>
                <Box className='flex flex-col  justify-center mr-2' >
                {Object.keys(heroOne.heroPowers).map(function (key, value) {
                    return (
                    <>
                        <Box key={key} className='justify-center items-center flex'>                             
                            {heroTwo.heroPowers[key] > heroOne.heroPowers[key] ?
                                <ArrowDropUpIcon color='success'/> : 
                                <ArrowDropDownIcon color='error' /> } 
                            <span key={key}>{heroTwo.heroPowers[key]} </span>
                         </Box>
                     </>
                    )
                })}
                </Box>
                <HeroCard heroRace={heroTwo.race} heroImageUrl={heroTwo.image} heroName={heroTwo.name} /> 
                </Box>
                <Button onClick={() => handleCloseModal()} variant='contained'   >Finalizar Batalha</Button>
            </Box>}
          
          </Box>
        </Modal>
</div>
            )
            
}