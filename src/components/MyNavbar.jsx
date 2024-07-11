import React from 'react'
import Box from '@mui/material/Box'
import {  Link, useNavigate } from "react-router-dom";
import { Stack, Typography } from '@mui/material'

export default function MyNavbar() {
    const navigate = useNavigate();
    const toLogin =()=>{
       
     navigate('/login')   
    }
    return (
       
        <Box  component="section" sx={{ p: 3,backgroundColor:'purple' }}>
            <Stack direction='row' justifyContent={'space-around'}>
            <Link to ={"/"}>
            <Typography variant='h5' sx={{color:'white',cursor:'pointer'}}>Form</Typography>
            </Link>
                <Link to ={"/add-form"}>
                <Typography variant='h5' sx={{color:'white',cursor:'pointer'}}>Add Product</Typography>{" "}
                </Link>
                <Typography variant='h5' sx={{color:'white',cursor:'pointer'}} onClick= {toLogin}>Logout</Typography>
            </Stack>
          
        </Box>
      )
}
