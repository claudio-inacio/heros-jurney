
'use client'
import * as React from 'react';
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import HeroCard from '@/components/molecules/HeroCard';
import { useHeroSelector } from '@/store';

import InforHeroChampion from '@/components/molecules/InfoHeroChampion';
import HeroPowerStats from '@/components/molecules/HeroPowerStats';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',    
    height: '90%',    
    border: '2px solid #000',
    boxShadow: 24,

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
        
        if(powerOne === powerTwo){
            return 3;
        }
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
          open={open}
          onClose={() => handleCloseModal()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='bg-gradient-to-r flex flex-col from-gray-800 to-orange-300 md:p-8 phone:px-2 phone:py-8'>
                  {isBattle === true ? (
                        <>
                            <div className='mt-48'>
                                <LinearProgress />
                            </div>
                            <Typography className='text-white pt-8 flex justify-center items-center' variant="h6" component="h2">
                                Herois batalhando.. Aguarde!!
                            </Typography>            
                        </>
                    )
                : 
                <Box className='flex flex-col space-y-3'>
                    <InforHeroChampion heroOneName={heroOne.name} heroTwoName={heroTwo.name} playerWin={playerWin} />
                    
                    <Box className='flex md:flex-row phone:flex-col justify-between' >
                        <HeroPowerStats championLeft heroImage={heroOne.image} heroName={heroOne.name} heroRace={heroOne.race} oponenteHero={heroTwo.heroPowers} principalHero={heroOne.heroPowers} />                
                        <Box className='flex flex-col  justify-center items-center p-0 m-0' >                                        
                                {powersCombat.map((power, index) => {
                                    return <span key={index}>{power}</span>
                                })}
                        </Box>
                        <Box className=' items-end flex justify-end'>
                            <HeroPowerStats  heroImage={heroTwo.image} heroName={heroTwo.name} heroRace={heroTwo.race} oponenteHero={heroOne.heroPowers} principalHero={heroTwo.heroPowers} />                
                        </Box>
                    </Box>
                </Box>}
            </Box>
        </Modal>
</div>
            )
            
}