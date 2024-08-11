import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Selfintro from './Intro_card/Selfintro.jsx'
import Information_drawer from './Information/Information_drawer.jsx'
import './index.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Margin } from '@mui/icons-material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box>
      <Grid container columnSpacing={2} rowSpacing={15}>
        <Grid item xs={12} md={3} >
          <Selfintro/>
        </Grid>
        <Grid item xs={12} md={9}>
          <Information_drawer/>
        </Grid>
      </Grid>
    </Box>
  </StrictMode>
)
