import React, { useEffect, useState } from 'react'
import { Avatar, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { getAllProduct,deleteProduct} from '../apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
//import {  } from '../../../backend/controllers/productController';
 //import data from '../assets/json/products'



export default function MyTable() {
    const [lists, setList] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        
       init();
       
    }, []);

const init = async ()=>{
   let res = await getAllProduct();
   setList(res.data);
};

const handleDelete = async(id) =>{
    try {
        await deleteProduct(id);
   let updatedList = lists.filter((list)=>list._id !== id)
   setList(updatedList) 
   toast.success("Product deleted Successfully")
    } catch (error) {
        toast.error("Something failed")
    }
   
};

const handleEdit = async(id) =>{
   
   navigate(`/edit-form/${id}`)
};



    return (
        <div>
            <Container>
                <TableContainer>
                    <Table>
                        {/* Table head */}
                        <TableHead>
                            <TableRow>
                                <TableCell>Sl.No</TableCell>
                                <TableCell> Image </TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>PriCe</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>

                        </TableHead>
                        {/* Table body */}
                        <TableBody>
                            {lists.map((row,index)=>(
                                <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell><Avatar alt="Rummy Sharp" src={ row.image }/></TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell>{row.quantity}</TableCell>
                                <TableCell>{row.price}</TableCell>
                                <TableCell><Button onClick={() => handleEdit(row._id)}>Edit</Button></TableCell>
                                <TableCell><Button onClick ={() => {handleDelete(row._id)}} >Delete</Button></TableCell>

                                </TableRow>
                            ))}

                        </TableBody>

                    </Table>

                </TableContainer>
            </Container>
        </div>
    )
}
