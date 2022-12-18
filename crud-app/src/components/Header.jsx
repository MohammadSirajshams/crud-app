import React,{useState} from 'react'
import {AppBar, Typography , Toolbar , Tabs , Tab} from '@mui/material'
import {NavLink} from "react-router-dom"
import './Card/card.css'

const Header = () => {

    const [value, setValue] = useState()

  return (
    <div>
    <AppBar sx={{backgroundColor:"#232444"}} position='sticky'>

    <Toolbar>
    <NavLink to='/'>
    <Typography style={{color:"white"}}>CRUD-APP</Typography>
    </NavLink>
     <Tabs 
     sx={{ml:'auto'}}
     textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
        
        <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
        <Tab LinkComponent={NavLink} to="/cards" label="Products"/>

     </Tabs>
     </Toolbar>
    
    </AppBar>
    </div>
  )
}

export default Header