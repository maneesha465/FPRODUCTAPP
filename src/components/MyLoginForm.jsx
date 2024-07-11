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
  // Call API to login
 let response = await login(data);  // Assuming login function is correctly imported
 console.log(response);
 if(response.data.success){
   toast.success('Login successful', {
    icon: '👏',
  });
  navigate('/');
} else {
   toast.error(response.data.error || 'Login failed');
//   reset(); // Reset form fields on error
 }  // Redirect to home page after successful login
} catch (error) {
  console.error("Login error:", error);
  if (error.response) {
    console.error("Response data:", error.response.data);
    toast.error(error.response.data.error);
  } else {
    toast.error('An error occurred. Please try again.');
  }
  // reset();  // Reset form fields on error
}
};
    

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