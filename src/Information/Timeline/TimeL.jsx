import { Box, Typography,Stack } from '@mui/material';
import t from './TimeL.json';
import './TimeL.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function Time_exp({timepref}) {

    const T = t;

    return(
        <Box ref={timepref} >
             <Typography component={'span'} sx={{width: { sm: '55%', xs: '100%' },fontSize:{sm:'60px',xs:'50px'},fontWeight:'bold'}}color="white">
                TimeLine
            </Typography>
            <Timeline position="alternate" sx={{marginTop:'4rem'}}> 
                {
                    T.t.map((evnt,i)=>
                        <TimelineItem key={i}>
                            <TimelineOppositeContent color="primary">
                                <Typography variant="h6" component="span" color='white' fontFamily='Times New Roman' sx={{fontSize: {sm:'1.4rem',xs:'1rem'}}}>
                                    {evnt["Event"]}
                                </Typography>
                                <Typography color="black" sx={{fontSize: {sm:'1.2rem',xs:'0.8rem'},}}>{evnt["Detail"]}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{fontSize: {sm:'1.4rem',xs:'1rem'}}}>{evnt["Event_time"]}</TimelineContent>
                        </TimelineItem>
                    )
                }
                
            </Timeline>
        </Box>
    )
}

export default Time_exp