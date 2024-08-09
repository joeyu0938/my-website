import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Margin } from '@mui/icons-material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Box sx={{ flexGrow: 1 }}>
      <Grid  container columnSpacing={2}>
        <Grid item xs={12} md={4} >
          <App/>
        </Grid>
        <Grid item xs={12} md={8}>
          <App/>
        </Grid>
      </Grid>
    </Box>
  </StrictMode>,
)
