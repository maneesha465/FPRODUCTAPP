import React, { useEffect } from 'react'
import MyNavbar from '../components/MyNavbar'
import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form';
import { addProduct, getProductbyId } from '../apis';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';


export default function FormPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
  } = useForm();


  const {id} = useParams();
  const isEdit = Boolean(id);
const loadData = async() => {
  if(!isEdit) return;
  try {
    let res = await getProductbyId(id);
    let formData = res.data;
    Object.keys(formData).forEach((key) => {
      setValue(key,formData[key]);
    });
    
  } catch (error) {
    console.log(error);
    toast.error('Failed to load product')
  }
}

useEffect(() => {
  loadData();
},[id]);

 const onSubmit = async(data) =>{
// const formData = new FormData()
// Object.keys(data).forEach((key) => {
//   formData.append(key,data[key]);

// });
 

//  const fileInput = document.getElementById("image")
//  if(fileInput && fileInput.files[0]){
//   formData.append("image",fileInput.files[0])
//  }
data.image ="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
 try {
  console.log(data);
  isEdit?  await addProduct(data) : await addProduct(data)
  toast.success("success")
  reset()
 } catch (error) {
  toast.error(error.response.data.error);

 }
};



  return (
    <div>
      <MyNavbar/>
      <Container>
        <Box sx={{margin:5,borderRadius:2,bgcolor:'gray',padding:5}} >
          <Paper elevation={24} >
          <Typography variant='h2' align='center'>
            {isEdit? "Edit product" : "Add product"}
          </Typography>
          <form onSubmit = {handleSubmit(onSubmit)} >
            <Grid container spacing={2}>
              <Grid item sm={12}>
             <Typography>Upload image</Typography> 
             <input type='file' name='image' id='image'/>
             </Grid>
             <Grid item sm={12}>
            <TextField id = "outlined-basic" label ="Title" variant="outlined" {...register("title")}/>
             </Grid>
            <Grid item sm={12}> 
            <TextField id = "outlined-basic" label ="Price" variant="outlined" {...register("price")}/>
            </Grid>
            <Grid item sm={12}>
            <TextField id = "outlined-basic" label ="Description" variant="outlined" {...register("description")}/>
            </Grid>
            <Grid item sm={12}>
            <TextField id = "outlined-basic" label ="Category" variant="outlined" {...register("category")}/>
            </Grid>
            <Grid item sm={12}>
            <TextField id = "outlined-basic" label ="Quantity" variant="outlined" {...register("quantity")}/>
            </Grid>
            <Grid item sm={12}>
            <Button variant='contained' type='submit'> {isEdit? "Update" : "Add New"}</Button>
            </Grid>
            </Grid>
          </form>
          </Paper>
        </Box>
      </Container>
     
    </div>
  )
}
