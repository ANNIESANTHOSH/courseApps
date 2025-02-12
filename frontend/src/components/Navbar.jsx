import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Link, useNavigate} from 'react-router-dom';


const Navbar = () => {
  const navigate=useNavigate()
  let clearUser=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      MyCourseApp
        </Typography>
        <Link to={'/courses'}><Button variant="contained">View</Button></Link>&nbsp;
        <Link to={'/add'}><Button variant="contained">Add</Button></Link>
        <Button variant="contained" onClick={clearUser}>Logout</Button>
       
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar