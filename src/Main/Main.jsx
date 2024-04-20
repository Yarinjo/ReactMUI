import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';


export const Main = () => {



  return (
    <Card variant="outlined" sx={{ maxWidth: 360 }}>
    <Box sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="h5" component="div">
          Bananas!
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          $4.50
        </Typography>
      </Stack>
      <Typography color="text.secondary" variant="body2">
        Description of bananas
      </Typography>
    </Box>
    <Divider />
    <Box sx={{ p: 2 }}>
      <Typography gutterBottom variant="body2">
        Select type
      </Typography>
      <Stack direction="row" spacing={1}>
        <Button className='button'>Soft</Button>
        <Button className='button' variant='outlined' >Medium</Button>
        <Button className='button' color='success' >Hard</Button>
      </Stack>
    </Box>
  </Card>
  )
}
