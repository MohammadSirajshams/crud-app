
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, FormLabel, TextField ,FormControlLabel,Checkbox } from '@mui/material'

const CardDetails = () => {
    const [inputs, setInputs] = useState({})
    const id = useParams().id
    const history = useNavigate()
    const [checked, setChecked] = useState(false)
   
    
    useEffect(() => {
      const fetchHandler = async ()=>{
        await axios.get(`http://localhost:5000/cards/${id}`).then(res=> res.data).then(data=>setInputs(data.card))
      }
      fetchHandler()
    }, [id])
    
    const sendRequest  = async () =>{
        await axios.put(`http://localhost:5000/cards/${id}`,{
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
        sendRequest().then(()=>history("/cards"))
    }
    const handleChange = (e)=>{
        setInputs((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }
  
  return (
    <div>
{ 
    inputs && (
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



   <Button variant='contained' type='submit'>Update Product</Button>
    </Box>
   </form>)
   
   }
    </div>
  )
}

export default CardDetails