import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Shop2Sharp, ShoppingBagRounded } from '@mui/icons-material';

export const Header = () => {
  return (

        <Toolbar className='toolbar'>
          <IconButton color='secondary' >
            <ShoppingBagRounded />
          </IconButton >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>

  )
}
