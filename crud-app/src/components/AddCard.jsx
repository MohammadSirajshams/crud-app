import { Box, Button, FormLabel, TextField ,FormControlLabel,Checkbox } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCard = () => {
    const history = useNavigate()
   const [inputs, setInputs] = useState({
    name:'',
    description:'',
    price:'',
    category:'',
    image:'',
   })

   const [checked, setChecked] = useState(false)
    const handleChange = (e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
    // console.log(e.target.name,"Value",e.target.value);
}

const sendRequest  = async() =>{
   await axios.post("http://localhost:5000/cards",{
        name:String(inputs.name),
        category:String(inputs.category),
        description:String(inputs.description),
        price:Number(inputs.price),
        image:String(inputs.image),
        available:Boolean(checked)
    }).then(res=>res.data)
}

const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(inputs,checked)
    sendRequest().then(()=>history('/cards'))
}
  return (
   <form onSubmit={handleSubmit}>
   <Box display="flex" flexDirection="column"
    justifyContent="center" maxWidth="700px"
    alignSelf="center" alignContent={"center"} marginRight="auto" marginLeft="auto" marginTop={"50px"} marginBottom={"30px"}>

   <FormLabel>Name</FormLabel>
    <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>
   <FormLabel>Category</FormLabel>
    <TextField value={inputs.category} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='category'/>
   <FormLabel>Description</FormLabel>
    <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'/>
   <FormLabel>Price</FormLabel>
    <TextField value={inputs.price} onChange={handleChange} type="number" margin='normal' fullWidth variant='outlined' name='price'/>
   <FormLabel>Image</FormLabel>
    <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'/>


    <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="available" />



   <Button variant='contained' type='submit'>Add Product</Button>
    </Box>
   </form>
  )
}

export default AddCard