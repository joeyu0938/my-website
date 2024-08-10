import { useState } from 'react'
import './Selfintro.css'
import { Avatar, Box, Paper } from '@mui/material'
import { Directions } from '@mui/icons-material'

const photo ={
  backgroundColor:  '#020817',
  padding:2,
  display: "flex",
  flexDirection: 'column',
  alignItems:'center'
}

function Selfintro() {
  return (
    <Paper elevation={3} sx={photo}>
      <Avatar src="./my-pic.jpg" sx={{width: 3/4,height:3/4}}></Avatar>
      <h1 className='Name'>Joe Yu</h1>
      <h2 className='Name'>余炘璋</h2>
    </Paper>
  )
}

export default Selfintro
