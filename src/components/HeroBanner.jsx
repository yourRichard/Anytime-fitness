import React, { useContext } from 'react'
import {Box,Stack,Typography,Button,IconButton} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png';
import {useTheme} from '@mui/material'
import { colorModeContext, tokens } from '../theme';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const HeroBanner = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(colorModeContext)

  return (
    <Box sx={{
        mt:{lg:'130px',xs:'70px'},
        ml:{sm:'50px'}
    }} 
    position='relative'
    p='20px'>
        <Typography color={colors.primary[100]} fontSize="25px" fontWeight="600">
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
        color="#0008ff"
        sx={{
            opacity:0.1,
            display:{lg:'block',xs:'none'}
        }}
        fontSize="200px">
            Exercises
        </Typography>
        <Stack direction="row">
        <img src={HeroBannerImage} alt="banner" style={{position:'absolute',right:'70px',top:'0px',width:'680px',height:'900px',marginTop:'-250px'}} />
        <IconButton onClick={colorMode.toggleColorMode}
       style={{position:'absolute',marginTop:'-830px',marginLeft:'74.6rem',background:'#566f9c  ',borderRadius:'3px' }}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon sx={{fontSize:40}} />
          ) : (
            < DarkModeOutlinedIcon sx={{fontSize:40}}/>
          )}
        </IconButton>
        </Stack>
        
    </Box>
  )
}

export default HeroBanner