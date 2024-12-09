import { Box, Typography,Stack } from '@mui/material';
import project_list from './project.json';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import './project.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';
import Tooltip from '@mui/material/Tooltip';
function Project({projectpref}) {

    const project = project_list.Project;
    
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
      })(({ theme }) => ({
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
        variants: [
          {
            props: ({ expand }) => !expand,
            style: {
              transform: 'rotate(0deg)',
            },
          },
          {
            props: ({ expand }) => !!expand,
            style: {
              transform: 'rotate(180deg)',
            },
          },
        ],
      }));
    
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    
    
    return(
        <Box ref={projectpref} sx={{justifyItems:'center'}}>
            <Typography component={'span'} justifyItems='flex-start' sx={{width: { sm: '55%', xs: '100%' },fontSize:{sm:'60px',xs:'50px'},fontWeight:'bold'}} color="white">
                    Project
            </Typography>
            <Box display='flex' flexWrap='wrap' justifyContent='space-around' alignContent='space-between' sx={{marginTop:'3rem'}}>
                { project.map((p,i)=>
                <Card sx={{ maxWidth: 345,m: '2rem',bgcolor:'#606060',height: "100%",display: "flex",flexDirection: "column", borderRadius:'1rem',boxShadow:'5px 5px 5px black;'}} key={i}>
                    <Box sx={{ position: 'relative'}}>
                    <CardMedia
                        component="img"
                        height='300px'
                        sx={{maxHeight:'350px'}}
                        image={p["img_path"].length != 0 ? p["img_path"] : './Project_img/notfound.jpg'}
                    />
                    <Box
                    sx={{
                        width: '100%',
                        padding: '15px',
                    }}
                    >
                        <Typography width='90%' variant="h6">{p["Name"]}</Typography>
                        <Typography width='90%' variant="body2">{p["Descript"]}</Typography>
                    </Box>
                    </Box>
                    <CardActions disableSpacing>
                    <Tooltip title="Video">
                      <YouTubeIcon onClick={() => window.open(p["Vid_path"])}></YouTubeIcon>
                    </Tooltip>
                    <Tooltip title="Learn more">
                      <LinkIcon onClick={() => window.open(p["Drive_path"])} sx={{marginLeft:'1rem'}}></LinkIcon>
                    </Tooltip>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                    <ExpandMoreIcon />
                    </ExpandMore>
                    </CardActions>
                </Card>
                
                )}
            </Box>
        </Box>
    )
}

export default Project