import { Box } from '@mui/material'
import { useState } from 'react'


function Cat(props) {

  var show = 5;

  if(props.Front == props.id){
    show = 0;
  }

  return (
    <Box sx={{width:'100%',height:'100%',backgroundColor:'gray',filter: `blur(${show}px)`}}>{props.title} {props.id} {props.num}</Box>
  )
}

export default Cat
