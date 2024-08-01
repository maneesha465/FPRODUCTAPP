import React from 'react'
import { Box, Button,Link,Stack, TextField, Typography } from '@mui/material'

import useLoginStore from '../store/loginStore'
import { useForm } from 'react-hook-form';
import {useNavigate} from "react-router-dom"
import {toast } from 'react-toastify';
import {login} from "../apis";

 function MyLoginForm() {
  const {setToggle} = useLoginStore();

      const {
      register,
      handleSubmit,
      formState:{errors},
      reset
    } = useForm();
    const navigate = useNavigate();

    const toLogin =async(data) =>{
    console.log("Login Data",data);

try {

    let res = await login(data);
    console.log("Login Response",res);
    localStorage.setItem('product-token',res.token)
    toast.success("Scuess")
    navigate("/")

}catch(error){
toast.error(error.response.data.error)
console.log(error);
}
    
    }
  return (
    
        <Box sx={{borderColor:'primary.main'}} 
        component="form"
         height={500} 
         width={500} 
         m={4}
         onSubmit= {handleSubmit(toLogin)}
         >

<Typography sx={{marginY:5}}  align='center' variant='h4'>Login</Typography>

<Stack spacing={5}>
<TextField id="email" label="Email" variant="outlined"{...register('email',{required:'Email is required'})} error={!!errors.email}
helperText={errors.email ? errors.email.message:''} />
<TextField id="password" label="Password" variant="outlined" {...register('password',{required:'Password is required'})} error={!!errors.password}
helperTextt={errors.password ? errors.password.message:''}  />
<Button variant="contained" type="submit" sx={{mt:3}} >Login</Button>
</Stack>

<Typography align='center' variant='subtitle1' sx={{cursor:'pointer'}} >New <Link sx={{cursor:'pointer'}} onClick={setToggle}> Signup here</Link> </Typography>
        </Box>
    
  );
}
export default MyLoginForm;