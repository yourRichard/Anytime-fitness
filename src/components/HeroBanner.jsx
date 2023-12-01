import React from 'react'
import {Box,Stack,Typography,Button} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png';


const HeroBanner = () => {

  return (
    <Box sx={{
        mt:{lg:'130px',xs:'70px'},
        ml:{sm:'50px'}
    }} 
    position='relative'
    p='20px'>
        <Typography color="#241c94" fontSize="25px" fontWeight="600">
            Fitness Club
        </Typography>
        <Typography 
        fontWeight="700"
        sx={{fontSize:{lg: '44px',xs:'40px'}}}
        mb={2}
         >
            Sweat, Smile <br/> and Repeat
        </Typography>
        <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}>
            Check out the most effective exercises.
        </Typography>
        <Button variant='outlined' color='secondary'>Explore</Button>
        <Typography
        fontWeight="700"
        color="#2a1c85"
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
        }}
        fontSize="200px">
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" style={{position:'absolute',right:'40px',top:'0px',width:'700px',height:'900px',marginTop:'-250px'}} />
    </Box>
  )
}

export default HeroBanner