import React,{useState,useEffect} from 'react'
import {Stack,Box,Button,TextField,Typography} from '@mui/material'

const SearchExercises = () => {

    const [search,setSearch] = useState('');
  return (
    <Stack alignItems="center" mt="47px" justifyContent="center" p="20px">
       <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
        Awesome <span>Exercises</span><br />you should know,
       </Typography>
       <Box position="relative" mb="72px">
            <TextField 
            sx={{
                input:{
                    fontWeight:'700',
                    border:'none',
                    borderRadius:'14px'
                },
                width:{
                    lg:'800px',
                    xs:'350px'
                },
                backgroundColor:'#7c7fd6'
            }}
            height="76px" value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder='Search your exercises' type='text'/>
            <Button sx={{border:'1px solid #2895b0',width:'120px',height:'57px',marginLeft:'20px',fontWeight:'600',color:'#2895b0',}}
            >
                Search
            </Button>
       </Box>
    </Stack>
  )
}

export default SearchExercises