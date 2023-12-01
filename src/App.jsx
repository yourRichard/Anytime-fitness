import React from 'react'
import {Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'
import Footer from './components/Footer'
import { colorModeContext,useMode } from './theme'
import { CssBaseline , ThemeProvider } from '@mui/material';


import './index.css'



const App = () => {
  const [theme,setTheme] = useMode();
  return (
  <colorModeContext.Provider value={setTheme}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <Box width = "400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
    </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App