import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Stack,IconButton,useTheme} from '@mui/material'
import Logo from '../assets/images/logo-main.png'
import { colorModeContext, tokens } from '../theme';

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(colorModeContext);
  return (
    <Stack
    direction='row'
    justifyContent='space-around'
    sx={{gap:{sm:'40px' , sx:'40px'},mt:{sm:"12px",xs:"20px"},justifyContent:'none'}}
    px="20px"
    >
        <Link to="/">
            <img src={Logo} alt="logo" style={{width: '200px', height:'128px', margin:'0px 20px'}} />
        </Link>
        <Stack
            direction='row'
            gap="40px"
            fontSize='24px'
            alignItems="flex-end"
            marginBottom="50px">
                <Link style={{textDecoration:"none", borderBottom:'3px solid #1d1682 '}}
                color={colors.primary[800]}>
                    Home
                </Link>
                <a href="#exercises" style={{textDecoration:"none"}} color={colors.primary[800]}>Exercises</a>
        </Stack>

    </Stack>
  )
}

export default Navbar