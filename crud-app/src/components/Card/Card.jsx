import { Button } from '@mui/material'
import React from 'react'
import './card.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Card = (props) => {
  const history = useNavigate()
    const {_id,name,category,description,available,price,image} = props.card
    const deleteHandler = async()=>{
      await axios.delete(`http://localhost:5000/cards/${_id}`).then(res=>res.data).
      then(()=>history("/cards")).then(()=>history("/"))
    }
  return (
    <div className='single-card'>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <h4>Rs {price}</h4>
        <div className='card-btn'>
        <Button LinkComponent={Link} to={`/cards/${_id}`}>Update</Button>
        <Button onClick={deleteHandler}>Delete</Button>
        </div>
    </div>
  )
}

export default Card