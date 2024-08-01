import React from 'react'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { signup } from "../apis";
import useLoginStore from '../store/loginStore';

function SignupForm() {
  const { setToggle } = useLoginStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const navigate = useNavigate();

  const toSignup = async (data) => {
    console.log("Signup Data", data);

    try {
      let res = await signup(data);
      console.log("Signup Response", res);
      localStorage.setItem('product-token', res.token)
      toast.success("Success")
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.error)
      console.log(error);
    }
  }

  return (
    <Box sx={{ borderColor: 'primary.main' }}
      component="form"
      height={500}
      width={500}
      m={4}
      onSubmit={handleSubmit(toSignup)}
    >
      <Typography sx={{ marginY: 5 }} align='center' variant='h4'>Sign Up</Typography>
      <Stack spacing={5}>
        <TextField id="email" label="Email" variant="outlined"
          {...register('email', { required: 'Email is required' })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField id="password" label="Password" variant="outlined"
          {...register('password', { required: 'Password is required' })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <TextField id="confirmPassword" label="Confirm Password" variant="outlined"
          {...register('confirmPassword', { required: 'Confirm Password is required' })}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
        />
        <Button variant="contained" type="submit" sx={{ mt: 3 }}>Sign Up</Button>
      </Stack>
      <Typography align='center' variant='subtitle1'>Already existing <Link onClick={setToggle} sx={{ cursor: 'pointer' }}>Login here</Link></Typography>
    </Box>
  );
}

export default SignupForm;
