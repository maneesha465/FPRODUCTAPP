import React from 'react'
import MyLoginForm from '../components/MyLoginForm'
import SignupForm from '../components/SignupForm'
import useLoginStore from '../store/loginStore'
import { Box } from '@mui/material'


export default function LoginPage() {
  const{isToggle} =useLoginStore()
  return(
    <div>
        {/* <MyLoginForm/> */}
        <Box sx={{display:"flex",justifyContent:"center",alignItem:"center",height:"100vh"}}>
        {
          isToggle? <MyLoginForm  /> : <SignupForm/>
        }
        
        </Box>
       
    </div>
  );
}
