import { Box, Typography,Stack } from '@mui/material';
import Prof from './Aboutme.json';
import './Aboutme.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CircleIcon from '@mui/icons-material/Circle';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';
import { Margin, Padding } from '@mui/icons-material';


function Aboutme({aboutref}) {

    const prof = Prof["Aboutme"];
    const button_style={
        color:'white',
        fontFamily: 'Times New Roman',
        display: 'flex',
        margin: '0.5rem',
        fontWeight: 'medium',
        fontSize: {sm:'1.4rem',xs:'1rem'},
        alignItems: 'center',
        flexWrap: 'wrap'}
    return(
        <Box ref={aboutref}>
            <Typography sx={{ typography: { sm: 'h2', xs: 'h4' },fontWeight:'bold'}} color="white">
                About Me
            </Typography>
            <Box sx={{ display: 'flex' ,flexWrap: 'wrap', justifyContent:"space-between"}}>
                <Typography component={'span'} sx={{ width: { sm: '55%', xs: '100%' },fontSize:{sm:'25px',xs:'20px'}}}  >
                    <Typography sx={button_style}>
                        {prof["profile"]}
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemText  primaryTypographyProps={{fontSize: '30px',color:'white',fontWeight:'bold'}}  primary="Skills :"
                            secondary={
                                <Typography component={'span'} sx={{color:'gray'}} >
                                    {prof.Skills.map((skill,i)=>
                                        <Box key={i} sx={button_style}>
                                            <CheckCircleIcon sx={{marginRight:'0.5rem'}}/>
                                            {skill}
                                            <br></br>
                                        </Box>
                                    )}
                                </Typography>
                            }/>       
                        </ListItem>
                        <ListItem>
                            <ListItemText primaryTypographyProps={{fontSize: '30px',color:'white',fontWeight:'bold'}} primary="Programming language :"
                            secondary={
                                <Typography component={'span'} sx={button_style}>
                                     <CheckCircleIcon sx={{marginRight:'0.5rem'}}/>
                                    {prof.Programming}
                                </Typography>
                            }/>       
                        </ListItem>
                        <ListItem>
                            <ListItemText primaryTypographyProps={{fontSize: '30px',color:'white',fontWeight:'bold'}} primary="language :"
                             secondary={
                                <Typography component={'span'} alignContent='center' sx={button_style}>
                                     <CheckCircleIcon sx={{marginRight:'0.5rem'}}/>
                                    {prof.language}
                                </Typography>
                            }/>       
                        </ListItem>
                        <ListItem>
                            <ListItemText primaryTypographyProps={{fontSize: '30px',color:'white',fontWeight:'bold'}} primary="Interest :"
                            secondary={
                                <Typography  component={'span'} alignContent='center' sx={button_style}>
                                     <CheckCircleIcon sx={{marginRight:'0.5rem'}}/>
                                    {prof.Interest}
                                </Typography>
                            }/>       
                        </ListItem>
                        <ListItem>
                            <ListItemText primaryTypographyProps={{fontSize: '30px',color:'white',fontWeight:'bold'}} primary="GPA :"
                            secondary={
                                <Typography component={'span'} alignContent='center' sx={button_style}>
                                     <CheckCircleIcon sx={{marginRight:'0.5rem'}}/>
                                    {prof.GPA}
                                </Typography>
                            }/>       
                        </ListItem>
                    </List>
                </Typography>
                <img src="./Grad_pic.jpg" className='grad_image' ></img>
            </Box>
        </Box>
    )
}

export default Aboutme