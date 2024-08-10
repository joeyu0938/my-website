import { useState } from 'react'
import './Selfintro.css'
import { Box,Paper, Stack } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HouseIcon from '@mui/icons-material/House';
import { FormatAlignLeftSharp, Height } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CakeIcon from '@mui/icons-material/Cake';
import MaleIcon from '@mui/icons-material/Male';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import BookIcon from '@mui/icons-material/Book';
import Tooltip from '@mui/material/Tooltip';
import { blue } from '@mui/material/colors';

const card ={
  backgroundColor:  '#020817',
  padding:2,
  display: "flex",
  flexDirection: 'column',
  alignItems:'center',
  height: '100%',
}
const text = {
  fontSize: 20,
  fontWeight: 600,
  fontFamily: "",
  color: "white",
};

function Selfintro() {
  return (
    <Paper elevation={5} sx={card}>
      <div className='borderLimit'>
        <img src="./my-pic.jpg" className='avatar'></img>
      </div>
      <h1 className='Name'>Joe Yu</h1>
      <h2 className='Name'>余炘璋</h2>
      <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <HouseIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primaryTypographyProps={{ style: text }}primary="Taichung City,South Dist"/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primaryTypographyProps={{ style: text }}primary="a0985339492@gmail.com"/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LocalPhoneIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primaryTypographyProps={{ style: text }}primary="0985-339-492"/>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <CakeIcon/>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primaryTypographyProps={{ style: text }} primary="23 years old"/>
          </ListItem>
      </List>
      <h2 className="Name">Education</h2>
      <img src="./school2.jpg" className='image'></img>
      <strong>Bachelor of Computer Science & Information Engineering,Jun 2024</strong>
      <Stack direction="row" spacing={2} sx={{marginTop:"2rem",transform:'scale(1.5)',color:'white'}}>
        <Tooltip title="Github" >
          <GitHubIcon onClick={() => window.location.replace('https://github.com/joeyu0938')}/>
        </Tooltip>
        <Tooltip  title="Github Page" >
          <WebAssetIcon onClick={() => window.location.replace('https://joeyu0938.github.io/my-website/')}/>
        </Tooltip>
        <Tooltip title="Resume">
          <BookIcon onClick={() => window.location.replace('')}/>
        </Tooltip>
      </Stack>
    </Paper>
  )
}

export default Selfintro
