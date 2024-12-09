import { Box, Typography,Stack } from '@mui/material';
import Exp_list from './Exp.json';
import './Exp.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Work_exp({expref}) {

    const ntpu_exp = Exp_list.Ntpu_exp;
    const button_style={
        color:'white',
        display: 'flex',
        margin: '1rem',
        fontSize: {sm:'1.4rem',xs:'1rem'},
        fontWeight: 'medium',
        fontFamily: 'Times New Roman',
        alignItems: 'center',
        flexWrap: 'wrap'}

    return(
        <Box ref={expref}   sx={{ flexDirection: {sm:'row',xs:'column'} ,display:'flex',justifyContent:"space-between"}}>
            <img src="./exp.jpg"  className='exp_image'></img>
            <Box>
                <Typography component={'span'} justifyItems='flex-start' sx={{width: { sm: '55%', xs: '100%' },fontSize:{sm:'60px',xs:'50px'},fontWeight:'bold'}}color="white">
                    Working Experience
                </Typography>
                <List>
                    <ListItem >
                        <ListItemText primary={<Typography
                            component="span"
                            fontWeight='bold'
                            color='white'
                            sx={{fontSize: {sm:'2rem',xs:'1rem'}}}
                            style={{ whiteSpace: 'pre-line' }} // Ensures line breaks
                            >
                            {ntpu_exp.year}{"\n"}
                            {ntpu_exp.Name}
                            </Typography>
                        
                        }
                            secondary={
                                <Typography component={'span'}>
                                     {ntpu_exp.Detail.map((skill,i)=>
                                        <Box key={i} sx={button_style}>
                                            <CheckCircleIcon sx={{marginRight:'0.5rem'}}/>
                                            {skill}
                                            <br></br>
                                        </Box>
                                    )}
                                </Typography>
                            }
                        />

                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Work_exp