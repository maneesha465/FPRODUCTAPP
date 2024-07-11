import React from 'react'
import MyNavbar from '../components/MyNavbar.jsx'
import MyTable from '../components/MyTable.jsx'
import { Box, Container, Paper } from '@mui/material'
export default function HomePage() {
  return (
    <div>
      <MyNavbar/>
      <Container>
        <Box sx={{margin:5,borderRadius:2,bgcolor:'pink',padding:5}} >
          <Paper elevation={24} >
          <MyTable/>
          </Paper>
        </Box>
      </Container>
     
    </div>
  )
}
