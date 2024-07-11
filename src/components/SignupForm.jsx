import { Box, Button,Link,Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../store/loginStore';


export default function SignupForm() {
  const {setToggle} = useLoginStore();
  return (
<>
         <Box height={500} width={500} m={4}>
<Typography sx={{marginY:5}}  align='center' variant='h4'>SignUp</Typography>
<Stack spacing={5}>
<TextField label="Email" variant="outlined" />
<TextField label="New Password" variant="outlined" />
<TextField label="Confirm Password" variant="outlined" />
<Button variant="contained">Sign Up</Button>
</Stack>
<Typography align='center' variant='subtitle1'>Already existing <Link onClick={setToggle} sx={{cursor:'pointer'}}>Login here</Link></Typography>
        </Box>
        </>
  )
}
