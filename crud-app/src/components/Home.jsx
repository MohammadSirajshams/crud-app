import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
            <Button LinkComponent={Link} to="/cards" sx={{marginTop: 15}} variant="contained">
                <Typography variant='h3'>View All Products</Typography>
            </Button>
        </Box>
    </div>
  )
}

export default Home